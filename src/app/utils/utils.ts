'use server'
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers"



export  async function getUserToken()
{

 const cookie = await cookies() ;

   const sessionToken =  cookie.get('next-auth.session-token')?.value|| cookie.get("__Secure-next-auth.session-token")?.value ;

  const decodedJwtTokent =await  decode({
    token :sessionToken ,
    secret :process.env.NEXTAUTH_SECRET! 
   }) ;

   return decodedJwtTokent.credentialsToken ;
 
}