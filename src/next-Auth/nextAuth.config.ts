import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from 'jwt-decode'

export const nextAuthConfig: NextAuthOptions = {

    providers: [


        Credentials({

            name: ' Fresh Cart',

            authorize: async function (credentials) {


                const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`, {
                    method: 'post',
                    body: JSON.stringify(credentials),
                    headers: {
                        "Content-type": "application/json"
                    }

                })

                const finalResponse = await res.json();
                console.log('final Authorized', finalResponse);


                if (finalResponse.message === 'success') {
                    // const { role, ...rest } = finalResponse.user;

                    const decodedObject: { id: string } = jwtDecode(finalResponse.token)
                    return {
                        id: decodedObject.id,
                        name: finalResponse.user.name,
                        email: finalResponse.user.email,
                        credentialsToken: finalResponse.token
                    };
                }
                else {

                    return null

                }

            },

            credentials: {

                email: {},
                password: {}

            }

        })

    ],
    session: {
        strategy: "jwt",   // 🔑 required for getToken()
    },
    secret: process.env.NEXTAUTH_SECRET,

    pages: {
        signIn: '/login'
    },

   callbacks: {
  async jwt({ token, user }) {
    // First time (on login), `user` is available
    if (user) {
      token.credentialsToken = user.credentialsToken;
      token.userId = user.id;
    }
    return token;
  },

  async session({ session, token }) {
    if (session.user) {
      session.user.id = token.userId as string;
      session.user.credentialsToken = token.credentialsToken as string;
    }
    return session;
  },
},



}