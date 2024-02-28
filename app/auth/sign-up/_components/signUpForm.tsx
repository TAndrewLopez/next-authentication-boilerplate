"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaGithub, FaUser } from "react-icons/fa";
import { ImSpinner10 } from "react-icons/im";
import {
    IoEyeOffSharp,
    IoEyeSharp,
    IoKey,
    IoKeyOutline,
} from "react-icons/io5";
import { z } from "zod";

import { Button, Input } from "@/components/ui";
import { RegisterSchema } from "@/schemas";
import { cn } from "@/lib/utils";

interface SignUpFormProps { }

export const SignUpForm: React.FC<SignUpFormProps> = ({ }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] =
        useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
    });

    const onSubmit: SubmitHandler<z.infer<typeof RegisterSchema>> = async (
        values
    ) => {
        console.log(values);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className="space-y-1.5">
                <div className="relative">
                    <label htmlFor="email" aria-label="email">
                        <FaUser className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4" />
                    </label>
                    <Input
                        className={cn("pl-8", !!errors.email?.message && "border-red-500")}
                        disabled={isLoading}
                        id="email"
                        type="email"
                        placeholder="name@email.com"
                        {...register("email")}
                    />
                </div>
                <p className="text-sm text-red-500">{errors.email?.message}</p>
            </div>

            <div className="space-y-1.5">
                <div className="relative">
                    <label htmlFor="password" aria-label="password">
                        <IoKeyOutline className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4" />
                    </label>
                    <Input
                        className={cn("pl-8", !!errors.password?.message && "border-red-500")}
                        disabled={isLoading}
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        {...register("password")}
                    />
                    {showPassword ? (
                        <IoEyeSharp
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer"
                            onClick={() => setShowPassword((prev) => !prev)}
                        />
                    ) : (
                        <IoEyeOffSharp
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer"
                            onClick={() => setShowPassword((prev) => !prev)}
                        />
                    )}
                </div>
                <p className="text-sm text-red-500">{errors.password?.message}</p>
            </div>

            <div className="space-y-1.5">
                <div className="relative">
                    <label htmlFor="confirmPassword" aria-label="confirm password">
                        <IoKey className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4" />
                    </label>
                    <Input
                        className={cn(
                            "pl-8",
                            !!errors.confirmPassword?.message && "border-red-500"
                        )}
                        disabled={isLoading}
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        {...register("confirmPassword")}
                    />
                    {showConfirmPassword ? (
                        <IoEyeSharp
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer"
                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                        />
                    ) : (
                        <IoEyeOffSharp
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer"
                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                        />
                    )}
                </div>
                <p className="text-sm text-red-500">{errors.confirmPassword?.message}</p>
            </div>

            <Button
                disabled={isLoading}
                type="submit"
                className="w-full flex gap-x-2">
                {isLoading && <ImSpinner10 className="spin w-4 h-4 animate-spin" />}
                Sign up with Email
            </Button>
            <div className="flex items-center">
                <div className="bg-neutral-700 h-[1px] w-full" />
                <p className="flex-1 text-nowrap px-2 uppercase text-muted-foreground text-xs">
                    or continue with
                </p>
                <div className="bg-neutral-700 h-[1px] w-full" />
            </div>
            <Button
                type="button"
                disabled={isLoading}
                className="flex gap-x-2 w-full"
                variant="outline">
                {isLoading ? (
                    <ImSpinner10 className="spin w-4 h-4 animate-spin" />
                ) : (
                    <FaGithub className="w-4 h-4" />
                )}
                GitHub
            </Button>
        </form>
    );
};
