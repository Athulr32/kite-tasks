import { NextApiRequest, NextApiResponse } from "next";
import cookie from 'cookie';
import jwt, { JwtPayload } from "jsonwebtoken";

export default function protect(req: any) {


    const { token } = cookie.parse(req.headers.cookie)
    console.log(token)

    try {
        const decoded = jwt.verify(token, 'gnhjkslfvnrjdf') as JwtPayload;
  
        if (decoded) {

            return {
                flag: true,
                email: decoded.email
            }
        }
        else {
            return {
                flag: false,
                email: null
            }
        }

    }
    catch (e) {

        return {
            flag: false,
            email: null
        }

    }







}