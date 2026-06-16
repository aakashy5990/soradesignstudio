import express from 'express';
import { savePerformance, getPerformance } from '../controllers/performanceController.js';
const PerformanceRouter = express.Router();

PerformanceRouter.post('/save-performance', savePerformance);
PerformanceRouter.get('/get-performance', getPerformance);

export default PerformanceRouter;