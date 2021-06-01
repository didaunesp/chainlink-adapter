import getBalances from './GetBalances';

const sumBalances = async() => {
   const balances = await getBalances();
   console.log(balances);
   return balances;
}

export default sumBalances;