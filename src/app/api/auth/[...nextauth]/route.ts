import { nextAuthConfig } from "_/next-Auth/nextAuth.config";
import NextAuth from "next-auth";


const authHandler = NextAuth(nextAuthConfig) ;


export {authHandler as POST , authHandler as GET}