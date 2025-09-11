import jsonwebtoken from 'jsonwebtoken';

const auth = (req, res, next) => {
    try{
        const authHeader  = req.headers.authorization;
        if(!authHeader) return res.status(401).json({ success: false, message: 'No token provided' });
        // Usually token is sent as "Bearer <token>"
        console.log("This is your authHeader", authHeader);
        const token = authHeader.split(' ')[1];
        // Verify token
        const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        console.log("THis is the req",req);
        next();
    }catch(error){
        res.send({success: false, message:'Invalid Token'});
    }
}

export default auth;