import express, { Express } from 'express';
import cors from 'cors';
import recipeRoutes from './routes/recipe.routes';
//import likeRoutes from './routes/like.router';


const app: Express = express();
const port: number = 3000;

var corsOptions = {
    origin: "http://localhost:8081"
  };

  app.use(cors(corsOptions));
  app.use(express.json());
  //app.use('/api', likeRoutes);

  // Configurar las rutas de recetas
recipeRoutes(app);


app.get('/', (req, res) =>{
    res.send('Hello World!!!')
});


app.listen(port, ()=> {
    console.log(`Example app listening on port http://localhost:${port}`)
});