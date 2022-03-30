import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/Router';
import cors from 'cors';

const app: express.Application = express();
const port = process.env.PORT;

export const corsOptions = {
  origin: '',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(router);

app.listen(port, function () {
  console.log(`starting app on the ${port} port`);
});

export default app;
