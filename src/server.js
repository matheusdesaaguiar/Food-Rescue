import express from 'express';
import bodyParser from 'body-parser';  // PARA LIDAR COM O BODY DAS REQUISIÇÕES
import donorRoutes from '../src/routes/donor.routes.js';



const app = express();
app.use(bodyParser.json());// "Middleware para permitir que o Express entenda requisições em JSON"

// 🚀 CONECTANDO AS ROTAS DE DOADORES
app.use('/donors', donorRoutes);


const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});