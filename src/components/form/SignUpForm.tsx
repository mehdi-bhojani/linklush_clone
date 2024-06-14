"use client";
import { Mail } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
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

const FormSchema = z
  .object({
    email: z.string().min(1, "Email required").email("invalid email"),
    password: z
      .string()
      .min(1, "password required")
      .min(8, "password must have minimum 8 characters"),
    name: z.string().min(1, "Username is required").max(100),
    confirmPassword: z.string().min(1, "password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "passwords do not match",
  });

export function SignUpForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (values: z.infer<typeof FormSchema>) => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post("/api/register", values);
      console.log(res.data);
      if (res.status == 200 || res.status == 201) {
        console.log("user added successfully");
        setError("Account created");
        setTimeout(() => {
          router.push("/sign-in");
        }, 3000);
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        if (
          err.response.status === 400 &&
          err.response.data.error === "User already exists"
        ) {
          setError(
            "User already exists. Please try again with a different email.",
          );
        } else {
          setError("An error occurred. Please try again.");
        }
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full">
        <h1 className="text-[26px] xs:text-[32px] lg:text-4xl font-bold mb-[10px] md:mb-4">
          Create your account
        </h1>
        <p className="text-gray-700 md:mb-8">
          Create an account today and start using Linklush.
        </p>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="alice capsey" {...field} />
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Re-Enter your password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Re-Enter your password"
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
          {loading ? "Processing..." : "Continue with Email"}
        </Button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        or
      </div>
      <GoogleSignInButton>Sign up with Google</GoogleSignInButton>
      <p className="text-center text-sm text-gray-600 mt-2">
        If you have an account, please&nbsp;
        <Link className="text-blue-500 hover:underline" href="/sign-in">
          Sign in
        </Link>
      </p>
    </Form>
  );
}
