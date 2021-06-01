import axios from 'axios';


const getBalances = async() => {
   const result = await axios.get('https://gist.githubusercontent.com/thodges-gh/3bd03660676504478de60c3a17800556/raw/0013f560b97eb1b2481fd4d57f02507c96f0d88f/balances.json');
   if(result.status == 200 && result.data)
   {
      return result.data;
   }
   else{
      throw Error('Error on requesting balances api');
   }
}

export default getBalances;