import getBalances from './GetBalances';
import Balance from '../Models/Balance';

const sumBalances = async() => {
   const balances: Balance[] = await getBalances();
   return doSumBalances(balances);
}

const doSumBalances = async(balances: Balance[]) => {
   const summed = balances.reduce((prev, current) => {
      current.balance = prev.balance + current.balance;
      return current;
    });
   return summed.balance;
}

export default sumBalances;