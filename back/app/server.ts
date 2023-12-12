import express, { Express } from 'express';
import cors from 'cors';
import recipeRoutes from './routes/recipe.routes';
import userRoutes from './routes/user.routes';
import CommentRoutes from './routes/comment.router';
import SavedRecipeRoutes from './routes/SaveR.router';
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

var corsOptions = {
    origin: "http://localhost:5173"
};

app.use(cors(corsOptions));
app.use(express.json());

recipeRoutes(app);
userRoutes(app);
CommentRoutes(app);
SavedRecipeRoutes(app);

app.get('/', (req, res) => {
    res.send('Hello World!!!')
});

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
});