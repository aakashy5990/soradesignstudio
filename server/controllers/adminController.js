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

        await LogoImgSlider.create({image})

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

export const getLogos = async (req, res) => {
    try{
        const logos = await LogoImgSlider.find({});
        res.status(200).json({success: true, logos});
    }catch(error){
        res.status(500).json({success: false, message: error.message});
    }
}