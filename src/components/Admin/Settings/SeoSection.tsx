"use client"
import React, { useEffect, useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea';
import Card, { CardContent } from '../Dashboard/Card';
import { CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import PremiumCard from '@/components/premium/premium.card';


const FormSchema = z.object({
    metaTitle: z.string().min(2, {
        message: "metaTitle must be at least 2 characters.",
    }),
    metaDiscription: z.string().min(2, {
        message: "metaDescription must be at least 2 characters.",
    }),
})

function SeoSection() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            metaTitle: "",
            metaDiscription: ""
        },
        mode: "onChange", // validate on change
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        setButtonDisabled(!form.formState.isValid);
    }, [form.formState.isValid]);

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log("form submitted", data);
    }

    return (
        <div className='border rounded-md p-4 relative'>
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-between'>
                <PremiumCard />
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 blur-[2px] pointer-events-none">
                    <FormField control={form.control} name="metaTitle" render={({ field }) => (
                        <FormItem>
                            <div className='flex flex-col mb-1'>
                                <FormLabel className='mb-4 font-bold'>SEO</FormLabel>
                                <FormLabel>Meta Title</FormLabel>
                            </div>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField control={form.control} name="metaDiscription" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Meta Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button disabled={buttonDisabled} type="submit">Update</Button>
                </form>
            </Form>
        </div>
    );
}

export default SeoSection;
