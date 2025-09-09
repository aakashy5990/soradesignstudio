import express from 'express';
import 'dotenv/config'
import cors from 'cors'
import connectDB from './config/ḍb.js'
import adminRouter from './routes/adminRoutes.js';
import auth from './middleware/auth.js';

const app = express();

// Connect MongoDB;
await connectDB();

// Middleware 
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Server is Running");
})
app.use('/admin', adminRouter);

app.get('/admin', auth, (req, res) => {
    res.json({
      success: true,
      message: 'Welcome to the dashboard',
      user: req.user
    });
 });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})