


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { Package, Prisma, PrismaClient } from "@prisma/client";
import type { Data } from '@/lib/types';



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    let pid = req.query.id! as string



    const prisma = new PrismaClient();

    const packages:Data = await prisma.package.findUnique({
        where: {
            id: pid

        }
    }) as Data

    res.json(packages)





}
