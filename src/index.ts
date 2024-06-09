import express from 'express';
import dotenv from 'dotenv';
import actionHistoryRoutes from './routes/actionHistoryRoutes';

dotenv.config();

export const app = express();
app.use(express.json());
app.use('/api', actionHistoryRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Action history service running on port ${PORT}`);
});
