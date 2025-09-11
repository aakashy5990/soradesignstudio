import mongoose from "mongoose"

const logosliderSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    imageKitFileId:{
        type:String,
    },
    imageKitFilePath:{
        type:String,
    }
},{timestamps:true});

const LogoImgSlider = mongoose.model('logoslider', logosliderSchema)

export default LogoImgSlider;