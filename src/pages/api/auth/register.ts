
import type { NextApiRequest, NextApiResponse } from 'next'

import {Package, Prisma, PrismaClient} from "@prisma/client";



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
  
    try{
        const find = await prisma.user.findUnique({
            where:{
             email
            }
         })
     
         if(find === null){
     
             const insert = await prisma.user.create({
                data:{
                 email,password
                }
              })
     
              res.status(400).json({msg:"Registered",flag:true})
         }
         else{
     
     
             res.status(400).json({msg:"User Already Available",flag:true})
         }
     
    }
    catch(e){
        res.status(400).json({msg:"Invalid",flag:false})
    }
}