import Balance from '../Models/Balance';
import getBalances from './GetBalances';

class Resp{
   highest: Balance;
   lowest: Balance;
}

const highestLowest = async() => {
   const balances: Balance[] = await getBalances();
   const resp: Resp = new Resp();
   resp.highest = await getHighest(balances);
   resp.lowest = await getLowest(balances);
   return resp;
}

const getHighest = async(balances: Balance[]) => {
  return balances.reduce((prev, current) => {
      return (prev.balance > current.balance) ? prev : current;
    });
}

const getLowest = async(balances: Balance[]) => {
   return balances.reduce((prev, current) => {
      return (prev.balance < current.balance) ? prev : current;
    });
}

export default highestLowest;