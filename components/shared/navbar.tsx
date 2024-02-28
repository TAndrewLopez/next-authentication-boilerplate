"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "../ui";

interface NavbarProps { }

export const Navbar: React.FC<NavbarProps> = ({ }) => {
    const router = useRouter();

    return (
        <nav className="p-4 border-b border-neutral-700">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <Link className="text-lg hover:underline underline-offset-4" href="/">
                    Home
                </Link>
                <Button
                    onClick={() => router.push("/auth/sign-up")}
                    size="sm"
                    variant="outline">
                    Sign Up
                </Button>
            </div>
        </nav>
    );
};
