import mongoose, { mongo } from 'mongoose';

const channelSchema = new mongoose.Schema({
    channelUsers : [{
        _id:{type:String,default:""},
        name:{type:String,default:""},
        profilePic:{type:String,default:""},
    }],
    messages:[{
        senderID:{type:String,default:""},
        message:{type:String,default:""},
        addedOn:{type:Number,default:Date.now()}
    }],
    addedOn:{type:Number,default:Date.now()}
});

channelSchema.method({
    saveData:async ()=>{
        return(this.save())
    }
});
channelSchema.static({
    findData: (findObj)=>{
        return(this.find(findObj));
    },
    findOneData:(findObj)=>{
        return( this.find(findObj))
    },
    findOneAndUpdateData:(findObj,updateObj)=>{
        return( this.findOneAndUpdate(findObj,updateObj),{
            upsert:true,
            new:true,
            setDefaultOnInsert:true
        })
    }
});


export default mongoose.model('wc-channel',channelSchema);