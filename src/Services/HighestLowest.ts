import Balance from '../Models/Balance';
import getBalances from './GetBalances';

const highestLowest = async() => {
   const balances: Balance[] = await getBalances();

   return {
      highest: await getHighest(balances),
      lowest: await getLowest(balances)
   }
}

const getHighest = async(balances: Balance[]): Promise<Balance> => {
  return balances.reduce((prev, current) => {
      return (prev.balance > current.balance) ? prev : current;
    });
}

const getLowest = async(balances: Balance[]): Promise<Balance> => {
   return balances.reduce((prev, current) => {
      return (prev.balance < current.balance) ? prev : current;
    });
}

export default highestLowest;