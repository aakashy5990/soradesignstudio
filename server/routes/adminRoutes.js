import express from 'express';
import { adminpanellogin, addLogoImg, client, getDashboard, getClients, getLogos, deleteClient, clientUpdate, getClientById, logoUpdate, getLogoById, deleteLogo} from '../controllers/adminController.js';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';

const adminRouter = express.Router();

adminRouter.post('/login', adminpanellogin);
adminRouter.post("/addlogo", upload.single('image'), auth, addLogoImg );
adminRouter.post('/clients', upload.single('clientImg'), auth, client);
adminRouter.get('/dashboard', auth, getDashboard)
adminRouter.get('/clients', auth, getClients)
adminRouter.post('/deleteclient', auth, deleteClient)
adminRouter.post('/updateclient', upload.single('clientImg'), auth, clientUpdate)
adminRouter.get('/client/:id', auth, getClientById)
adminRouter.get('/logos', auth, getLogos)
adminRouter.get('/logo/:id', auth, getLogoById)
adminRouter.post('/updatelogo', auth, upload.single('image'), logoUpdate)
adminRouter.post('/deletelogo', auth, deleteLogo)

export default adminRouter;