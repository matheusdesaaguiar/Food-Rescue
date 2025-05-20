import express from 'express';
import collectionPointRoutes from '../src/routes/collectionPoints.routes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/collection-points', collectionPointRoutes);

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});