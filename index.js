import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import productsRoutes from './routes/products.routes.js';
import authRoutes from './routes/auth.routes.js';
import { notFound } from './middlewares/error.middleware.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', productsRoutes);
app.use('/auth', authRoutes);

app.use(notFound);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
