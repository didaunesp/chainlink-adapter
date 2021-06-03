import express from "express";

const controller = async(req: express.Request, res: express.Response, service: CallableFunction) => {
   try{
      const result = await service();
      return res.json(result);
   }
   catch(error){
      console.log(error);
      return res.status(500).json(error.message);
   }
}

export default controller;