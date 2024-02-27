"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "../ui/button";

interface NavbarProps { }

export const Navbar: React.FC<NavbarProps> = ({ }) => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <nav className="p-4 border-b border-neutral-700">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <Link className="text-lg hover:underline underline-offset-4" href="/">
                    Home
                </Link>
                {pathname === "/auth/sign-up" ? (
                    <Button
                        onClick={() => router.push("/auth/sign-up")}
                        size="sm"
                        variant="ghost">
                        Login
                    </Button>
                ) : (
                    <Button
                        onClick={() => router.push("/auth/sign-up")}
                        size="sm"
                        variant="outline">
                        Sign Up
                    </Button>
                )}
            </div>
        </nav>
    );
};
