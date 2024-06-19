import NextAuth from "next-auth";
import Google from "next-auth/providers/google"
import { pool } from "./db";
import PostgresAdapter from "@auth/pg-adapter";

export const NAuth = NextAuth({
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
        jwt({token,trigger,session}) {
            if(trigger === "update") token.name = session.user.name;
            return token;
        }
    }
})

export const {handlers,auth,signIn,signOut} = NAuth;