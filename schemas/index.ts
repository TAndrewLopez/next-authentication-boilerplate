import validator from "validator";
import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().email("A valid email address is required."),
    password: z
        .string({
            required_error: "Please enter your password."
        })
});

export const RegisterSchema = z
    .object({
        email: z.string().email("A valid email address is required."),
        password: z
            .string()
            .min(6, "Password must be 6 characters minimum.")
            .max(45, "Password must be less than 45 characters."),
        confirmPassword: z
            .string()
            .min(6, "Password must be 6 characters minimum.")
            .max(45, "Password must be less than 45 characters."),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match.",
        path: ["confirmPassword"],
    });

export const UpdateSchema = z.object({
    email: z.string().email("A valid email address is required."),
    password: z
        .string()
        .min(6, "Password must be 6 characters minimum.")
        .max(45, "Password must be less than 45 characters."),
    firstName: z
        .string()
        .min(2, "First name must be 2 characters minimum.")
        .max(45, "First name must be less than 45 characters.")
        .regex(new RegExp("^[a-zA-Z]+$")),
    lastName: z
        .string()
        .min(2, "Last name must be 2 characters minimum.")
        .max(45, "Last name must be less than 45 characters.")
        .regex(new RegExp("^[a-zA-Z]+$")),
    phoneNumber: z
        .string()
        .refine(validator.isMobilePhone, "Please enter a valid phone number."),
});
