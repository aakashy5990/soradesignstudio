import mongoose from 'mongoose'

const clientSchema = new mongoose.Schema({
    profileimg:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    primarytitle:{
        type:String,
        required:true
    }
})

const clientmodel = mongoose.model('clients' ,clientSchema);

export default clientmodel;