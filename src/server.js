import express from 'express';
import cors from 'cors';
import impactRoutes from './routes/impact.routes.js';

const app = express();
app.use(bodyParser.json());// "Middleware para permitir que o Express entenda requisições em JSON"

// 🚀 CONECTANDO AS ROTAS DE DOADORES
app.use('/donors', donorRoutes);


const PORT = 3000;

app.use(cors()); 
app.use(express.json());

app.use('/impact', impactRoutes);

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});