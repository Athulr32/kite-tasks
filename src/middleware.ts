
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from "jsonwebtoken";


export default function middleware(request: any) {

    if(request.nextUrl.pathname.startsWith('/api')){

      const token = request.cookies.token;

  console.log(token)

    }







  }
  

