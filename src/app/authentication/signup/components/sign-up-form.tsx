"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(1, { message: "The name is mandatory" }),
  email: z
    .email({ message: "Provide a valid email" })
    .min(1, { message: "The email is mandatory" }),
  password: z
    .string()
    .min(8, { message: "The password must have at least 8 characters" }),
});

const SignupFormComponent = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Name"
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
          Create Your Account
        </Button>
      </form>
    </Form>
  );
};

export default SignupFormComponent;
