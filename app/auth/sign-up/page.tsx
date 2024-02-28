"use client";

import { FormEvent, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { ImSpinner10 } from "react-icons/im";

import { Button } from "@/components/ui";
import { SignUpForm } from "./_components/signUpForm";

interface SignUpPageProps { }

const SignUpPage: React.FC<SignUpPageProps> = ({ }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const target = e.target as typeof e.target & {
                email: { value: string };
                password: { value: string };
            };

            console.log(target.email.value, target.password.value)
        } catch (error) {
            console.log("error occurred");
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 3000);
        }
    };

    return (
        <div className="h-full flex items-center justify-center">
            <div className="flex flex-col gap-y-6">
                <div className="text-center space-y-3">
                    <p className="text-2xl font-semibold">Create an account</p>
                    <p className="text-muted-foreground text-sm">
                        Enter your email below to create your account
                    </p>
                </div>

                <SignUpForm onSubmit={handleFormSubmit} isLoading={isLoading} />

                <div className="flex items-center">
                    <div className="bg-neutral-700 h-[1px] w-full" />
                    <p className="flex-1 text-nowrap px-2 uppercase text-muted-foreground text-xs">
                        or continue with
                    </p>
                    <div className="bg-neutral-700 h-[1px] w-full" />
                </div>
                <Button disabled={isLoading} className="flex gap-x-2" variant="outline">
                    {isLoading ? (
                        <ImSpinner10 className="spin w-4 h-4 animate-spin" />
                    ) : (
                        <FaGithub className="w-4 h-4" />
                    )}
                    GitHub
                </Button>
                <p className="max-w-sm text-muted-foreground text-center">
                    By clicking continue, you agree to our Terms of Service and Privacy
                    Policy.
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;
