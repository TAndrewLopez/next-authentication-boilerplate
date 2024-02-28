"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "../ui"; 

interface SignInButtonProps { }

export const SignInButton: React.FC<SignInButtonProps> = ({ }) => {
    const router = useRouter();
    const { data: session } = useSession();

    return (
        <div className="flex items-center gap-2">
            {session && session.user ? (
                <>
                    <p>{session.user.email}</p>
                    <Link
                        className="text-sky-500 hover:text-sky-600"
                        href="/api/auth/sign-out">
                        Sign Out
                    </Link>
                </>
            ) : (
                <>
                    <Button variant="link" onClick={() => router.push("/api/auth/signin")}>
                        Sign In
                    </Button>
                    <Button variant="link" onClick={() => router.push("/auth/sign-up")}>
                        Sign Up
                    </Button>
                </>
            )}
        </div>
    );
};
