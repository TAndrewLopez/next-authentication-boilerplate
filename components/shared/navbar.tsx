"use client";

import Link from "next/link";

import { SignInButton } from "../auth/signInButton";

interface NavbarProps { }

export const Navbar: React.FC<NavbarProps> = ({ }) => {
    return (
        <nav className="p-4 border-b border-neutral-700">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <Link className="text-lg hover:underline underline-offset-4" href="/">
                    Home
                </Link>
                <SignInButton />
            </div>
        </nav>
    );
};
