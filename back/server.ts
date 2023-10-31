import express, { Express } from 'express';
import cors from 'cors';

const app: Express = express();
const port: number = 3000;

var corsOptions = {
    origin: "http://localhost:8081"
  };

  app.use(cors(corsOptions));

  app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Hello World!!!')
});

/*require("./app/routes/tutorial.routes.js")(app);*/

app.listen(port, ()=> {
    console.log(`Example app listening on port http://localhost:${port}`)
});