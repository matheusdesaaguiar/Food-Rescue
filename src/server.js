import express from 'express';
import cors from 'cors';
import impactRoutes from './routes/impact.routes.js';

const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(express.json());

app.use('/impact', impactRoutes);

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});