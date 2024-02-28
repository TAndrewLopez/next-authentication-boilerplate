import bcrypt from "bcryptjs";
import NextAuth, { type AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "@/lib/prisma";
import { User } from "@prisma/client";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "Your Username",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials) {
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials?.username,
                    },
                });

                if (!user) throw new Error("Username or password is incorrect.");
                if (!credentials?.password) throw new Error("Password is required.");

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.password
                );

                if (!isCorrectPassword)
                    throw new Error("Username or password is incorrect.");

                const { password, ...userWithoutPassword } = user;
                return userWithoutPassword;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.user = user as User;
            return token;
        },
        async session({ token, session }) {
            session.user = token.user;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
