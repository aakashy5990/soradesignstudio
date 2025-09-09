import express from 'express';
import { adminpanellogin, addLogoImg, client, getDashboard, getClients, getLogos} from '../controllers/adminController.js';
import upload from '../middleware/multer.js';

const adminRouter = express.Router();

adminRouter.post('/login', adminpanellogin);
adminRouter.post("/addlogo", upload.single('image'), addLogoImg );
adminRouter.post('/clients', upload.single('clientImg'), client);
adminRouter.get('/dashboard', getDashboard)
adminRouter.get('/clients', getClients)
adminRouter.get('/logos', getLogos)

export default adminRouter;