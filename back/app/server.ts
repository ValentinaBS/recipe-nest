import express, { Express } from 'express';
import cors from 'cors';
import recipeRoutes from './routes/recipe.routes';
import userRoutes from './routes/user.routes';


const app: Express = express();
const port: number = 3000;

var corsOptions = {
    origin: "http://localhost:8081"
  };

  app.use(cors(corsOptions));
  app.use(express.json());

  // Configurar las rutas de recetas
recipeRoutes(app);
userRoutes(app);


app.get('/', (req, res) =>{
    res.send('Hello World!!!')
});


app.listen(port, ()=> {
    console.log(`Example app listening on port http://localhost:${port}`)
});