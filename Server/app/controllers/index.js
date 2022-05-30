// Business logic for APIs
import UserModel from './../models/users';
import ChannelModel from './../models/channels';
import {sendResponse,sendError} from './../../utility/index'
module.exports={
    createUser: async (req,res)=>{
        const requestData = req.body;
        const isUserExist = await UserModel.findOneData({
            phoneNumber: requestData.phoneNumber,
          });
          if (isUserExist)
            return sendResponse(
              res,
              isUserExist,
              "User fetched successfully",
              true,
              200
            );
        
        const userObj=  new UserModel(req.body);
        await userObj.saveData();
        // await userObj.save()
        sendResponse(res,userObj,"User added Successfully",true,201);
    },
    loginUser:async (req,res)=>{
        const requestData = req.body;
        const isUserExist=await UserModel.findOneData({
            phoneNumber:requestData.phoneNumber
        });
        if(!isUserExist){
            sendError(res,isUserExist,"Invalid credentials")
        }
        else{
            sendResponse(res,isUserExist,"User logged in successfully",true,200);
        }
    },
    createChannel:async (req,res)=>{
        // To add - send different response if channel exist previously
        const channelModel = new ChannelModel(req.body);
        await channelModel.saveData();
        sendResponse(res,channelModel,"Channel created Successfully",true.valueOf,201);
    },
    getChannelList:async (req,res)=>{
        const requestData = req.query;
        const channels =await ChannelModel.findData({
           "channelUsers._id":requestData.userId
        })
        sendResponse(res,channels, "Channel List fetched",true,200);
    },
    searchUser:async (req,res)=>{
        const requestData = req.query;
        const isUserExist = await UserModel.findOneData({
            phoneNumber:requestData.phone,
        });
        if(!isUserExist)
            ( sendError(res,{},"No User Found"));
        else{
            sendResponse(res,isUserExist,"User Found Successfully",true,200);
        }
    },
    sendMessage:async (req,res)=>{
        const requestData = req.body;
        await ChannelModel.findOneAndUpdateData(
            {_id:requestData.channelId},
            {
                $push:{
                    messages:requestData.messages
                }
            }
        );
        console.log(requestData.messages,ChannelModel );
        sendResponse(res,{},"Message sent successfully",true,200);
    },
}   