import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/Router';

const app: express.Application = express();
const port = 3000;

app.use(bodyParser.json());
app.use(router);

app.listen(port, function () {
  console.log(`starting app on the ${port} port`);
});

export default app;
