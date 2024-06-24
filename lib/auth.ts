import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google"
import { pool } from "./db";
import PostgresAdapter from "@auth/pg-adapter";

export const authOptions:NextAuthConfig = {
    adapter: PostgresAdapter(pool),
    providers:[Google({
        clientId:process.env.AUTH_GOOGLE_ID,
        clientSecret:process.env.AUTH_GOOGLE_SECRET
    })],
    secret:process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({session, user}) {
            if (session?.user) {
              session.user.id = user.id;
            }
            return session;
        },
        authorized({request,auth}) {
            try {
                const {pathname} = request.nextUrl;
                if(pathname === "")return true;
                return !!auth;
            } catch (err) {
                console.log(err);
            }
        },
        jwt({token,user}) {
            if(user){
                token.id = user.id
            }
            return token;
        }
    }
};
export const NAuth = NextAuth(authOptions)

export const {handlers,auth,signIn,signOut} = NAuth;