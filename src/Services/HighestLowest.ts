import getBalances from './GetBalances';

const highestLowest = async() => {
   const balances = await getBalances();
   console.log(balances);
   return balances;
}

export default highestLowest;