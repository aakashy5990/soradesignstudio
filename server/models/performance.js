import mongoose from "mongoose";

const performanceSchema = new mongoose.Schema({
    imageName: { type: String, required: true },
    loadTime: { type: Number, required: true },
    testedAt: { type: Date, default: Date.now },
})

const Performance = mongoose.model('performance', performanceSchema);
export default Performance;