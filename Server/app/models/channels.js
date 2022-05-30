import mongoose, { mongo } from 'mongoose';

const channelSchema = new mongoose.Schema({
    channelUsers : [
        {
        _id:{type:String,default:""},
        name:{type:String,default:""},
        profilePic:{type:String,default:""},
        },
    ],
    messages:[
        {
        senderId:{type:String,default:""},
        message:{type:String,default:""},
        addedOn:{type:Number,default:Date.now()}
        },
    ],
    addedOn:{type:Number,default:Date.now()}
});

channelSchema.method({
    saveData:async function (){
        return(this.save())
    }
});
channelSchema.static({
    findData: function (findObj){
        return(this.find(findObj));
    },
    findOneData:function (findObj){
        return( this.find(findObj))
    },
    findOneAndUpdateData:function(findObj,updateObj){
        return( this.findOneAndUpdate(findObj,updateObj),{
            upsert:true,
            new:true,
            setDefaultOnInsert:true
        })
    }
});


export default mongoose.model('wc-channel',channelSchema);