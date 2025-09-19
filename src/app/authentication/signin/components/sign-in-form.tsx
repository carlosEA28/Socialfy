"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/authClient";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const formSchema = z.object({
  email: z
    .email({ message: "Provide a valid email" })
    .min(1, { message: "The email is mandatory" }),
  password: z
    .string()
    .min(8, { message: "The password must have at least 8 characters" }),
});

const SigninFormComponent = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await authClient.signIn.email({
      email: values.email,
      password: values.password,
      fetchOptions: {
        onError: (error) => {
          if (error.error.code === "INVALID_EMAIL_OR_PASSWORD") {
            toast.error("Email/");
            return;
          }
        },
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Email"
                  type="email"
                  className=" bg-[#222222] border-none  h-[72px]  text-[#898889] placeholder:text-[#898889] font-medium text-lg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="8 Digit Pin"
                  type="password"
                  className=" bg-[#222222] border-none  h-[72px]  text-[#898889] placeholder:text-[#898889] font-medium text-lg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full h-[72px] cursor-pointer"
          type="submit"
          size={"lg"}
        >
          Login to Your Account
        </Button>
      </form>
    </Form>
  );
};

export default SigninFormComponent;
