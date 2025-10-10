import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {

  const cookieName = process.env.NODE_ENV=== "production" ? "__Secure-next-auth.session-token" : "next-auth.session-token" 


  const token = await getToken({
    req,
    cookieName
  });

  console.log("JWT in middleware:", token);

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/cart:path*","/categories","/payment"],
};
