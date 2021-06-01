import express, { Application } from 'express';
import routes from './routes';

const ip = '0.0.0.0';
const port = 5000;
console.log(port);
// const logger = getLogger('server');

const app: Application = express();

//app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

app.listen(port, ip, () => {
  console.log('Server started on ', port);
});