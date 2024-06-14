"use client";

import { Mail } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GoogleSignInButton from "./GoogleButton";
import { useState } from "react";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  email: z.string().min(1, "Email required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password required")
    .min(8, "Password must have a minimum of 8 characters"),
});

const errorMessages: {
  [key: string]: string;
  CredentialsSignin: string;
  default: string;
} = {
  CredentialsSignin: "Invalid email or password.",
  default: "An error occurred. Please try again.",
};

export function SignInForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (values: z.infer<typeof FormSchema>) => {
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (res?.error) {
        setError(errorMessages[res.error] || errorMessages.default);
      } else {
        setError("You are login into DashBoard wait...");
        router.push("/admin");
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full">
        <h1 className="text-[26px] xs:text-[32px] lg:text-4xl font-bold mb-[10px] md:mb-4">
          Welcome back
        </h1>
        <p className="text-gray-700 mb-6 md:mb-8">
          Please fill your email to sign in.
        </p>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="abc@example.com"
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        <Button className="w-full mt-6" type="submit" disabled={loading}>
          <Mail className="mr-2" />{" "}
          {loading ? "Signing in..." : "Continue with Email"}
        </Button>
      </form>

      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        or
      </div>

      <GoogleSignInButton>Sign in with Google</GoogleSignInButton>

      <p className="text-center text-sm text-gray-600 mt-2">
        If you don&apos;t have an account, please&nbsp;
        <Link className="text-blue-500 hover:underline" href="/sign-up">
          Sign up
        </Link>
      </p>
    </Form>
  );
}
