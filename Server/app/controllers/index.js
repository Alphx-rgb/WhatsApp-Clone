// Business logic for APIs
import UserModel from './../models/users';
import ChannelModel from './../models/channels';

module.exports={
    createUser: async (req,res)=>{
            UserModel.findOneAndUpdateData({},{});
    },
    loginUser:async (req,res)=>{},
    createChannel:async (req,res)=>{},
    getChannelList:async (req,res)=>{},
    searchUser:async (req,res)=>{},
    sendMessage:async (req,res)=>{},
}   