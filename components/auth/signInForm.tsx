"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaGithub, FaUser } from "react-icons/fa";
import { ImSpinner10 } from "react-icons/im";
import { IoEyeOffSharp, IoEyeSharp, IoKeyOutline } from "react-icons/io5";
import { toast } from "sonner";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { LoginSchema } from "@/schemas";
import { Button, Input } from "../ui";

interface SignInFormProps {
  callbackUrl?: string;
}

export const SignInForm: React.FC<SignInFormProps> = ({ callbackUrl }) => {
  const [showPassword, setShowPassword] = useState<boolean>();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });

  const onFormSubmit: SubmitHandler<z.infer<typeof LoginSchema>> = async (
    values
  ) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) throw new Error("Invalid Fields");

    const { email, password } = validatedFields.data;

    try {
      const result = await signIn("credentials", {
        redirect: false,
        username: email,
        password,
      });

      if (!result?.ok) {
        toast.error(result?.error);
        return;
      }
      toast.success(`Welcome, ${email}.`)
      router.push(callbackUrl ? callbackUrl : "/");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-3">
      <div className="space-y-1.5">
        <div className="relative">
          <label htmlFor="email" aria-label="email">
            <FaUser className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4" />
          </label>
          <Input
            className={cn("pl-8", !!errors.email?.message && "border-red-500")}
            disabled={isSubmitting}
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
            className={cn(
              "pl-8",
              !!errors.password?.message && "border-red-500"
            )}
            disabled={isSubmitting}
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
        <Link
          className="text-sm text-muted-foreground hover:text-white hover:underline underline-offset-4"
          href="/auth/forgotPassword">
          Forgot Password?
        </Link>
      </div>

      <Button
        disabled={isSubmitting}
        type="submit"
        className="w-full flex gap-x-2">
        {isSubmitting && <ImSpinner10 className="spin w-4 h-4 animate-spin" />}
        Log in with Email
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
        disabled={isSubmitting}
        className="flex gap-x-2 w-full"
        variant="outline">
        {isSubmitting ? (
          <ImSpinner10 className="spin w-4 h-4 animate-spin" />
        ) : (
          <FaGithub className="w-4 h-4" />
        )}
        GitHub
      </Button>
    </form>
  );
};
