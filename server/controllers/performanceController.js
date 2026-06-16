import Performance from '../models/performance.js';

export const savePerformance = async (req, res) => {
    try{
        const { results } = req.body;
        console.log("🟢 Received Body:", req.body);
        if (!results || results.length === 0) {
            return res.status(400).json({ success: false, message: "No Data provided" });
        }
        // Save each image performance result
        for (const item of results) {
            await Performance.create({
            imageName: item.imageName,
            loadTime: item.loadTime,
            });
        }
        res.status(201).json({success: true, message: 'Performance data saved successfully'});

    }catch(error){
        console.error("❌ Error saving performance:", error);
        res.status(500).json({success: false, message: error.message});
    }
}

export const getPerformance = async (req, res) => {
    try{
       const performance = await Performance.find().sort({testedAt: -1}).limit(20);
       res.status(200).json({ success: true, performance });
    }catch(error){
        res.json({success: false, message: error.message});
    }
}