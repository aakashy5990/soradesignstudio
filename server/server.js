import express from 'express';
import 'dotenv/config'
import cors from 'cors'
import connectDB from './config/ḍb.js'
import adminRouter from './routes/adminRoutes.js';
import auth from './middleware/auth.js';
import PerformanceRouter from './routes/performanceRoutes.js';
const app = express();

// Connect MongoDB;
await connectDB();

// CORS Configuration
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://creatorzvision.com',
    'https://www.creatorzvision.com',
    'https://creatorzvision.vercel.app',
    // Add your Hostinger domain here
    process.env.CLIENT_URL || 'https://creatorzvision.com'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-requested-with'],
  optionsSuccessStatus: 200
};

// Middleware 
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.get('/', (req, res) => {
    res.send("Server is Running");
})
app.use('/admin', adminRouter);
app.use('/performance', PerformanceRouter);
// Optional: health for admin area
app.get('/admin/health', (req, res) => {
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})