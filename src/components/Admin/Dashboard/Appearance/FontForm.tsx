"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Appearance} from "@/lib/store";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";


const FormSchema = z.object({
  fontName: z.string().nonempty("Font name is required"),
});

interface fontProps {
  appearance: Appearance;
  updateAppearance: (getAppearance: Appearance) => void;
}

export const FontForm:React.FC<fontProps> = (props)  => {
  const [updateDisabled, setupdateDisabled] = useState(true);
  
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fontName: "",
      },
      });
      
  const onsubmit = async(data: z.infer<typeof FormSchema>) => {
    const newAppearance = {
      ...props.appearance,
      font: data.fontName,
      };
      props.updateAppearance(newAppearance);
      setupdateDisabled(true);
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onsubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="fontName"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Font</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  onOpenChange={() => setupdateDisabled(false)}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Font" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Open Sans">Open Sans</SelectItem>
                    <SelectItem value="Alegreya">Alegreya</SelectItem>
                    <SelectItem value="Roboto">Roboto</SelectItem>
                    <SelectItem value="Anek">Anek</SelectItem>
                    <SelectItem value="Montserrat">Montserrat</SelectItem>
                    <SelectItem value="Lato">Lato</SelectItem>
                    <SelectItem value="Poppins">Poppins</SelectItem>
                    <SelectItem value="Oswald">Oswald</SelectItem>
                    <SelectItem value="Raleway">Raleway</SelectItem>
                    <SelectItem value="Futura">Futura</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <Button type="submit" disabled={updateDisabled}>
          Update
        </Button>
      </form>
    </Form>
  );
}
