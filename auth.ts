import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google';
// import { MongoDBAdapter } from '@auth/mongodb-adapter'
// import client from "./lib/db";
// import Resend from "next-auth/providers/resend";

export const { handlers, signIn, signOut, auth } = NextAuth({
    // adapter: MongoDBAdapter(client),
    providers: [GitHub, Google],
})