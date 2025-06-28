import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import itemRoutes from './routes/itemRoutes.js';
import cartRoutes from './routes/cartRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('src/uploads'));

app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/cart', cartRoutes);


export default app;