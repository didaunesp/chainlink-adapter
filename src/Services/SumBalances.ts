import getBalances from './GetBalances';
import Balance from '../Models/Balance';

const sumBalances = async(): Promise<number> => {
   const balances: Balance[] = await getBalances();
   return doSumBalances(balances);
}

const doSumBalances = async(balances: Balance[]): Promise<number> => {
   const total = balances.reduce((prev, current) => {
      current.balance = prev.balance + current.balance;
      return current;
    });
   return total.balance;
}

export default sumBalances;