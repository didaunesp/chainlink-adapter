import express from 'express';
import highestLowest from './Services/HighestLowest';
import sumBalances from './Services/SumBalances';


const routes = express.Router();

routes.get('/sum-balances', async (req: express.Request, res: express.Response) => {
   try{
      const result = await sumBalances();
      return res.json(result);
   }
   catch(error){
      console.log(error);
      return res.status(500).json(error.message);
   }
});

routes.get('/highest-lowest-addresses', async (req: express.Request, res: express.Response) => {
   try{
      const result = await highestLowest();
      return res.json(result);
   }
   catch(error){
      console.log(error);
      return res.status(500).json(error.message);
   }
});

export default routes;