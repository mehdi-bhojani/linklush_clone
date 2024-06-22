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
import { ISetting } from '@/lib/store';


const FormSchema = z.object({
    userName: z.string().min(2, {
        message: "user Name must be at least 2 characters.",
    }),

})

interface myProps {
    setting: ISetting;
    onUpdate: (setting:ISetting) => void;
  }

  const UserName:React.FC<myProps> = (props) => {
      const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            userName: props.setting?.userName || "",
        },
        mode: "onChange", // validate on change
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(()=>{
        form.reset({
            userName: props.setting?.userName || "",
        });
    },[props.setting]);

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log("form submitted", data);
        const newSetting = {
            ...props.setting,
            userName: data.userName,
        };
        props.onUpdate(newSetting);
        setButtonDisabled(true);
    }

    return (
        <div className='border rounded-md p-4 mt-4'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6" onChange={()=>setButtonDisabled(false)}>
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

export default UserName;
