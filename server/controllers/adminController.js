import jsonwebtoken from 'jsonwebtoken';
import 'dotenv/config';
import fs from 'fs';
import imagekit from '../config/imageKit.js';
import LogoImgSlider from '../models/admin.js';
import clientmodel from '../models/client.js';

export const adminpanellogin = async (req, res) => {
    try{
        const { username, password } = req.body;

        // Get admin credentials from environment variables
        const adminUsername = process.env.ADMIN_USERNAME;
        const adminPassword = process.env.ADMIN_PASSWORD;

        // Check if credentials match
        if(username !== adminUsername){
            return res.status(401).json({success:false, message:'Invalid Username'});
        }
        
        
        if(password !== adminPassword){
            return res.status(401).json({success:false, message:'Invalid Password'});
        }

        // Generate JWT token
        const token = jsonwebtoken.sign({username: adminUsername}, process.env.JWT_SECRET); 

        res.json({ success:true, message: 'Login successful', token });
    }catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}


export const addLogoImg = async (req, res) => {
    try{
        const imageFile = req.file;

        if(!imageFile){
            return res.json({success:false, message:"Missing required fields"})
        }

        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file:fileBuffer,
            fileName:imageFile.originalname,
            folder:'/LogoImg'
        })

        // optimization through imagekit URL transformation
        const optimizationImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                {quality: 'auto'},
                {format: 'webp'},
                {width: '1280'},
            ]
        })

        const image = optimizationImageUrl;
        await LogoImgSlider.create({
            image,
            imageKitFileId: response.fileId,
            imageKitFilePath: response.filePath,
        })

        res.json({success: true, message: 'Image added Successfully'})

    }catch(error){
        res.json({success:false, message:error.message})
    }
}

export const client = async (req, res) => {
    try{
        if(!req.body || !req.body.client){
            return res.json({success:false, message:"Missing client payload"})
        }
        const {clientName, clientPryTitle, clientSryTitle} = JSON.parse(req.body.client);
        const imageFile = req.file;

        if(!clientName || !clientPryTitle || !clientSryTitle || !imageFile){
            return res.json({success:false, message:"Missing required fields"})
        }

        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file:fileBuffer,
            fileName:imageFile.originalname,
            folder:'/client'
        })

        // optimization through imagekit URL transformation
        const optimizationImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                {quality: 'auto'},
                {format: 'webp'},
                {width: '1280'},
            ]
        })

        const image = optimizationImageUrl;

        // Map to schema fields
        const created = await clientmodel.create({
            profileimg: image,
            imageKitFileId: response.fileId,
            imageKitFilePath: response.filePath,
            name: clientName,
            title: clientSryTitle,
            primarytitle: clientPryTitle
        })

        res.json({success: true, message: 'Client added Successfully', client: created})


    }catch(error){
        res.json({success: false, message: error.message})
    }
}

export const getDashboard = async (req, res) => {
    try{
        const Logos = await LogoImgSlider.find({});
        const getAllClients = await clientmodel.find({});

        const dashboardData = {
            Logos,
            getAllClients,
        }
        res.status(200).json({success:true, dashboardData});
    }catch(error){
        res.json({success:false, message:error.message});
    }
}

export const getClients = async (req, res) => {
    try{
        const clients = await clientmodel.find({});
        res.status(200).json({success: true, clients});
    }catch(error){
        res.status(500).json({success: false, message: error.message});
    }
}

export const getClientById = async (req, res) => {
    try{
        const { id } = req.params;
        const clientDoc = await clientmodel.findById(id);
        if(!clientDoc){
            return res.status(404).json({ success: false, message: 'Client not found' });
        }
        res.status(200).json({ success: true, client: clientDoc });
    }catch(error){
        res.status(500).json({success: false, message: error.message});
    }
}

export const getLogos = async (req, res) => {
    try{
        const logos = await LogoImgSlider.find({});
        res.status(200).json({success: true, logos});
    }catch(error){
        res.status(500).json({success: false, message: error.message});
    }
}

export const getLogoById = async (req, res) => {
    try{
        const { id } = req.params;
        const logoDoc = await LogoImgSlider.findById(id);
        if(!logoDoc){
            return res.status(404).json({ success: false, message: 'Logo not found' });
        }
        res.status(200).json({ success: true, logo: logoDoc });
    }catch(error){
        res.status(500).json({success: false, message: error.message});
    }
}

export const deleteLogo = async (req, res) => {
    try{
        const { id } = req.body;
        if(!id){
            return res.status(400).json({ success: false, message: 'Logo id is required' });
        }
        const existing = await LogoImgSlider.findById(id);
        if(!existing){
            return res.status(404).json({ success: false, message: 'Logo not found' });
        }

        if (existing.imageKitFileId) {
            try {
                await imagekit.deleteFile(existing.imageKitFileId);
            } catch (ikErr) {
                console.error('ImageKit logo delete failed:', ikErr?.message || ikErr);
            }
        }

        await LogoImgSlider.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Logo deleted successfully' });
    }catch(error){
        res.status(500).json({success: false, message: error.message});
    }
}

export const deleteClient = async (req, res) => {
    try{
        const { id } = req.body;
        if(!id){
            return res.status(400).json({ success: false, message: 'Client id is required' });
        }

        const existing = await clientmodel.findById(id);
        if(!existing){
            return res.status(404).json({ success: false, message: 'Client not found' });
        }

        // Attempt to delete image from ImageKit if we have fileId
        if (existing.imageKitFileId) {
            try {
                await imagekit.deleteFile(existing.imageKitFileId);
            } catch (ikErr) {
                // Continue even if remote delete fails, but report
                console.error('ImageKit delete failed:', ikErr?.message || ikErr);
            }
        }

        await clientmodel.findByIdAndDelete(id);
        res.status(200).json({success: true, message: 'Client deleted successfully'})
    }catch(error){
        res.status(500).json({success: false, message: error.message});
    }
}

export const clientUpdate = async (req, res) => {
    try{
        const { id, clientName, clientPryTitle, clientSryTitle } = req.body;
        if(!id){
            return res.status(400).json({ success: false, message: 'Client id is required' });
        }
        const existing = await clientmodel.findById(id);
        if(!existing){
            return res.status(404).json({ success: false, message: 'Client not found' });
        }

        // Update text fields if provided
        if (typeof clientName === 'string' && clientName.length) existing.name = clientName;
        if (typeof clientPryTitle === 'string' && clientPryTitle.length) existing.primarytitle = clientPryTitle;
        if (typeof clientSryTitle === 'string' && clientSryTitle.length) existing.title = clientSryTitle;

        // If a new image is uploaded, replace in ImageKit
        const imageFile = req.file;
        if (imageFile) {
            try {
                if (existing.imageKitFileId) {
                    try { await imagekit.deleteFile(existing.imageKitFileId); } catch {}
                }
                const fileBuffer = fs.readFileSync(imageFile.path);
                const uploadResponse = await imagekit.upload({
                    file: fileBuffer,
                    fileName: imageFile.originalname,
                    folder: '/client'
                });
                const optimizationImageUrl = imagekit.url({
                    path: uploadResponse.filePath,
                    transformation: [
                        {quality: 'auto'},
                        {format: 'webp'},
                        {width: '1280'},
                    ]
                });
                existing.profileimg = optimizationImageUrl;
                existing.imageKitFileId = uploadResponse.fileId;
                existing.imageKitFilePath = uploadResponse.filePath;
            } catch (imgErr) {
                return res.status(500).json({ success: false, message: imgErr.message || 'Image update failed' });
            }
        }

        await existing.save();
        res.status(200).json({success: true, message: 'Client updated successfully', client: existing})
        
    }catch(error){
        res.status(500).json({success: false, message: error.message});
    }
}

export const logoUpdate = async (req, res) => {
    try{
        const { id } = req.body;
        if(!id){
            return res.status(400).json({ success: false, message: 'Logo id is required' });
        }
        const existing = await LogoImgSlider.findById(id);
        if(!existing){
            return res.status(404).json({ success: false, message: 'Logo not found' });
        }

        const imageFile = req.file;
        if (!imageFile) {
            return res.status(400).json({ success: false, message: 'No image file provided' });
        }

        // Replace existing file in ImageKit
        try {
            if (existing.imageKitFileId) {
                try { await imagekit.deleteFile(existing.imageKitFileId); } catch {}
            }
            const fileBuffer = fs.readFileSync(imageFile.path);
            const uploadResponse = await imagekit.upload({
                file: fileBuffer,
                fileName: imageFile.originalname,
                folder: '/LogoImg'
            });
            const optimizationImageUrl = imagekit.url({
                path: uploadResponse.filePath,
                transformation: [
                    {quality: 'auto'},
                    {format: 'webp'},
                    {width: '1280'},
                ]
            });
            existing.image = optimizationImageUrl;
            existing.imageKitFileId = uploadResponse.fileId;
            existing.imageKitFilePath = uploadResponse.filePath;
        } catch (imgErr) {
            return res.status(500).json({ success: false, message: imgErr.message || 'Logo image update failed' });
        }

        await existing.save();
        res.status(200).json({success: true, message: 'Logo updated successfully', logo: existing})
    }catch(error){
        res.status(500).json({success: false, message: error.message});
    }
}