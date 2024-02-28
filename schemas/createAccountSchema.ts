import * as z from 'zod';

export const CreateAccountSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
})