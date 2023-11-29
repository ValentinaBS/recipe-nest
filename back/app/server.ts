import express, { Express } from 'express';
import cors from 'cors';
import recipeRoutes from './routes/recipe.routes';
import userRoutes from './routes/user.routes';
import CommentRoutes from './routes/comment.router';
import LikeRoutes from './routes/like.router';
import SavedRecipeRoutes from './routes/SaveR.router';

const app: Express = express();
const port: number = 3000;

var corsOptions = {
    origin: "http://localhost:8081"
  };

  app.use(cors(corsOptions));
  app.use(express.json());
  

  // Configuracion de rutas 
recipeRoutes(app);
userRoutes(app);
CommentRoutes(app);
LikeRoutes(app);
SavedRecipeRoutes(app);

app.get('/', (req, res) =>{
    res.send('Hello World!!!')
});


app.listen(port, ()=> {
    console.log(`Example app listening on port http://localhost:${port}`)
});