import express from "express";

const controller = async(req: express.Request, res: express.Response, service: CallableFunction) => {
   try{
      const result = await service();
      return res.json({
         jobRunId: req.body.id,
         data: result,
         result: JSON.stringify(result)
      });
   }
   catch(error){
      console.log(error);
      return res.status(500).json({
         jobRunId: req.body.id,
         status: "errored",
         error: error.message});
   }
}

export default controller;