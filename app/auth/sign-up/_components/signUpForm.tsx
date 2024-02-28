"use client";

import { useState, type FormEvent } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { ImSpinner10 } from "react-icons/im";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

import { Button, Input } from "@/components/ui";

interface SignUpFormProps {
    isLoading: boolean;
    onSubmit: (e: FormEvent) => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({
    isLoading,
    onSubmit,
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <form onSubmit={(e) => onSubmit(e)} className="space-y-3">
            <div className="relative">
                <label htmlFor="email">
                    <FaUser className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4" />
                </label>
                <Input
                    className="pl-8"
                    disabled={isLoading}
                    id="email"
                    type="email"
                    placeholder="name@email.com"
                />
            </div>
            <div className="relative">
                <label htmlFor="password">
                    <FaLock className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4" />
                </label>
                <Input
                    className="pl-8"
                    disabled={isLoading}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                />
                {showPassword ? (
                    <IoEyeSharp
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer"
                        onClick={toggleShowPassword}
                    />
                ) : (
                    <IoEyeOffSharp
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer"
                        onClick={toggleShowPassword}
                    />
                )}
            </div>
            <Button
                disabled={isLoading}
                type="submit"
                className="w-full flex gap-x-2">
                {isLoading && <ImSpinner10 className="spin w-4 h-4 animate-spin" />}
                Sign up with Email
            </Button>
        </form>
    );
};
