import { z } from "zod";

export const createUserEmailSchema = z.object({
  name: z.string().min(1, { message: "The name is mandatory" }),
  email: z
    .email({ message: "Provide a valid email" })
    .min(1, { message: "The email is mandatory" }),
  password: z
    .string()
    .min(8, { message: "The password must have at least 8 characters" }),
});

export type CreateUserEmailSchema = z.infer<typeof createUserEmailSchema>;
