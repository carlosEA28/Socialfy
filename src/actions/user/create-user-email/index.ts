import { auth } from "@/lib/auth";
import { CreateUserEmailSchema } from "./schema";

export const CreateUserEmail = async (
  createUserParams: CreateUserEmailSchema
) => {
  const user = await auth.api.signUpEmail({
    body: {
      name: createUserParams.name,
      email: createUserParams.email,
      password: createUserParams.password,
      callbackURL: "/authentication/verify-email",
    },
  });

  return user;
};
