import express from 'express';
import corsMiddleware from './middleware/cors.middleware.js';
import impactRoutes from './routes/impact.routes.js';


app.use('/impact', impactRoutes);
app.use('/donors', donorRoutes);

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;