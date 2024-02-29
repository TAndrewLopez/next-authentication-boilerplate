"use client";

import { useSession, signOut, signIn } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "../ui";

interface SignInButtonProps { }

export const SignInButton: React.FC<SignInButtonProps> = ({ }) => {
    const router = useRouter();
    const pathname = usePathname();
    const { data: session } = useSession();

    return (
        <div className="flex items-center gap-2">
            {session && session.user ? (
                <>
                    <p>{session.user.email}</p>
                    <Button className="text-sky-500 hover:text-sky-600" variant='link' onClick={() => signOut({ callbackUrl: `/auth/sign-in?callbackUrl=${pathname}` })}>
                        Sign Out
                    </Button>
                </>
            ) : (
                <>
                    <Button
                        disabled={pathname === "/auth/sign-in"}
                        variant="link"
                        onClick={() => signIn()}>
                        Sign In
                    </Button>
                    <Button
                        disabled={pathname === "/auth/sign-up"}
                        variant="link"
                        onClick={() => router.push("/auth/sign-up")}>
                        Sign Up
                    </Button>
                </>
            )}
        </div>
    );
};
