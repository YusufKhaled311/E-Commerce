
'use server'
import { cookies } from "next/headers";
import { LoginFromType } from "./Login.type";

export async function handelLoginForm(data: LoginFromType) {
     try {


          const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`,
               {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: { "Content-Type": "application/json" },

               })

          const finalResponse = await res.json();

          console.log('finalResponse', finalResponse)

          if (finalResponse.message === 'success') {


               const cookie = await cookies();
               cookie.set('user-token', finalResponse.token, {
                    httpOnly: true,
                    sameSite: "strict",
                    maxAge: 60 * 60 * 24 * 7
               })


               return true
          }

          else {
               return finalResponse.message
          }



     }


     catch (error) {

          console.log('Error ', error)

     }
}
