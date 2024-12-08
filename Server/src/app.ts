// app.ts
import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import studentRoutes from './routes/studentRoutes';
import errorHandler from './middleware/errorHandler';

dotenv.config();

const app: Application = express();


app.use(cors());
app.use(express.json());

app.use('/api/students', studentRoutes);

app.use(errorHandler);

export default app;
