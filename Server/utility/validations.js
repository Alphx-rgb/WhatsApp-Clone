import * as yup from 'yup'; 
import {sendResponse, sendError} from './index';
export const ValidateCreateUser = async (req,res,next)=>{
    let schema = yup.object().shape({
        phoneNumber:yup.number().required(),
        name:yup.string().required(),
        password:yup.string().required(),
        profilePic:yup.string()
    })
    await validate(schema, req.body,res,next);
    // schema.validate(req.body,{abortEarly:false}).then((valid)=>{
    //     if(valid){
    //         next();
    //     }
    //     else{
    //         res.status(400).send("Invalid Request");
    //     }
    // }).catch((e)=>{
    //     res.status(400).send("Invalid Request");
    // })
};

export const ValidateLogin = async (req,res,next)=>{
    const schema=yup.object().shape({
        phoneNumber:yup.number().required(),
        password:yup.string.required()
    });
    await ValidateLogin(schema,req.body,res,next);
};






const validate = async (schema,reqData,res,next)=>{
    try{
        await schema.validate(reqData,{abortEarly:false}).then((valid)=>{
            if(valid){next();}
        }).catch((err)=>{
            const errors= err.inner.map(({path,message,value})=>({
                path,message,value,
            }));
            sendError(res,errors,"Invalid Request");
        })
    }
    catch(e){
        const errors= e.inner.map(({path,message,value})=>({
            path,message,value,
        }));
        sendError(res,errors,"Invalid Request");
    }
}