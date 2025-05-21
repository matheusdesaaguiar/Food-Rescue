import express from 'express';
import cors from 'cors';
import impactRoutes from './routes/impact.routes.js';
import notification from './routes/notificationEngagement.routes.js';

const app = express();
app.use(express.json());// "Middleware para permitir que o Express entenda requisições em JSON" //Felipe: troquei o bodyParser por express, porque estava dando erro no test

// 🚀 CONECTANDO AS ROTAS DE DOADORES
app.use('/donors', donorRoutes);


const PORT = 3000;

app.use(cors()); 
app.use(express.json());

app.use('/notification', notification);

app.use('/impact', impactRoutes);

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;