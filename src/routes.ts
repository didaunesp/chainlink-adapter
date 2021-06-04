import express from 'express';
import highestLowest from './Services/HighestLowest';
import sumBalances from './Services/SumBalances';
import controller from './Controller/BaseController';

const routes = express.Router();

routes.post('/sum-balances', async (req: express.Request, res: express.Response) => {
   return controller(req, res, sumBalances);
});

routes.post('/highest-lowest-addresses', async (req: express.Request, res: express.Response) => {
  return controller(req, res, highestLowest);
});

export default routes;