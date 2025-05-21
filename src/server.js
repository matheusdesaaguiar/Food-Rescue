import express from 'express';
import corsMiddleware from './middleware/cors.middleware.js';
import impactRoutes from './routes/impact.routes.js';
import donorRoutes from './routes/donor.routes.js';
import swaggerSpec from './docs/SwaggerSpec.js';
import swaggerUi from 'swagger-ui-express';
import notificationRoutes from './routes/notificationEngagement.routes.js';
import collectionPointRoutes from '../src/routes/collectionPoints.routes.js';
const app = express();
const PORT = 3000;

app.use(corsMiddleware); 
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/impact', impactRoutes);
app.use('/donors', donorRoutes);
app.use('/notification', notificationRoutes)

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});
