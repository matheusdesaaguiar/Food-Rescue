import express from 'express';
import cors from 'cors';
import impactRoutes from './routes/impact.routes.js';
import donorRoutes from './routes/donor.routes.js';
import swaggerSpec from './docs/Swagger.spec.js';
import swaggerUi from 'swagger-ui-express';
const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/impact', impactRoutes);
app.use('/donors', donorRoutes);

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});