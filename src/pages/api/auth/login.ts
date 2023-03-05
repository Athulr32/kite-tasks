
import type { NextApiRequest, NextApiResponse } from 'next'

import {Package, Prisma, PrismaClient} from "@prisma/client";
import jwt from "jsonwebtoken";


interface ReqData extends NextApiRequest{
  body:{
    email:string,
    password:string
  }
}
export default async function handler(
    req: ReqData,
    res: NextApiResponse
) {
    const prisma = new PrismaClient();

    const email = req.body.email;   
    const password = req.body.password;

    const find = await prisma.user.findUnique({
       where:{
        email,
       }
    })

    if(find === null){

        res.status(400).json({msg:"Please Register First Available",flag:false})
    }

    else if(find.password === password){

        let token = jwt.sign({email }, "gnhjkslfvnrjdf");
      
         
        res.json({
            token,
            flag: true
        })
        
    }
    else{

        res.status(400).json({msg:"Please Register First Available",flag:false})
    }


}
