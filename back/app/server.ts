import express, { Express } from 'express';
import cors from 'cors';
import recipeRoutes from './routes/recipe.routes';
import userRoutes from './routes/user.routes';
import dotenv from 'dotenv';
dotenv.config();

//import likeRoutes from './routes/like.router';

const app: Express = express();
const PORT = process.env.PORT || 3000;

var corsOptions = {
    origin: "http://localhost:8081"
};

  app.use(cors(corsOptions));
  app.use(express.json());
  //app.use('/api', likeRoutes);

  // Configurar las rutas de recetas
recipeRoutes(app);
userRoutes(app);

app.get('/', (req, res) =>{
    res.send('Hello World!!!')
});


app.listen(PORT, ()=> {
    console.log(`Example app listening on port http://localhost:${PORT}`)
});