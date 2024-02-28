"use server";

import { User } from "@prisma/client";
import prisma from "../prisma";
import bcrypt from "bcryptjs";

export const registerUser = async (
    user: Omit<
        User,
        "id" | "emailVerified" | "firstName" | "lastName" | "phone" | "image"
    >
) => {
    const result = await prisma.user.create({
        data: {
            ...user,
            password: await bcrypt.hash(user.password, 10),
        },
    });
};
