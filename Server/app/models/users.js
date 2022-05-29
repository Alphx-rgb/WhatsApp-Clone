import mongoose, { mongo } from 'mongoose';
const UserSchema = new mongoose.Schema({
    name:{type:String,default:""},
    phone:{type:String,default:""},
    password:{type:String,default:""},
    profilePic:{type:String,default:""},
    addedOn:{type:Number,default:Date.now()}
});

UserSchema.method({
    saveData:async ()=>{
        return(this.save())
    }
});
UserSchema.static({
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


export default mongoose.model('wc-user',UserSchema);