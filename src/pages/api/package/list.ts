
import type { NextApiRequest, NextApiResponse } from 'next'

import {Package, Prisma, PrismaClient} from "@prisma/client";
import type { Data } from '@/lib/types';




export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {



    try{
        const prisma = new PrismaClient();

    const packages:Data[] = await prisma.package.findMany()  as Data[]
    
      res.json(packages)
    }
    catch(e){

        res.status(400)
    }
}
