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


const FormSchema = z.object({
    userName: z.string().min(2, {
        message: "user Name must be at least 2 characters.",
    }),

})

function SeoSection() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            userName: "",

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
        <div className='border rounded-md p-4 mt-4'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                    <FormField control={form.control} name="userName" render={({ field }) => (
                        <FormItem>
                            <div className='flex flex-col mb-1'>
                                <FormLabel className='mb-4 font-bold'>User Name</FormLabel>
                            </div>
                            <FormControl>
                                <Input placeholder="" {...field} />
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
