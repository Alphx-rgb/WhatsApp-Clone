import mongoose, { mongo } from 'mongoose';
const UserSchema = new mongoose.Schema({
    name:{type:String,default:""},
    phoneNumber:{type:String,default:""},
    password:{type:String,default:""},
    profilePic:{type:String,default:""},
    addedOn:{type:Number,default:Date.now()}
});

UserSchema.method({
    saveData: async function () {
        return this.save()
    }
});
UserSchema.static({
    // NOte: here 'this' will not work
    // findData: (findObj)=>{
    //     return(this.find(findObj));
    // }
    findData: function (findObj) {
        return this.find(findObj)
    },
    findOneData: function (findObj) {
        return this.findOne(findObj)
    },
    findOneAndUpdateData: function (findObj, updateObj) {
        return this.findOneAndUpdate(findObj, updateObj, {
            upsert: true,
            new: true,
            setDefaultsOnInsert: true
        })
    },
});


export default mongoose.model('wc-user',UserSchema);