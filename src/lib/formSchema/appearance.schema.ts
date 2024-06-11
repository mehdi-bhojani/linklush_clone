import { z } from "zod";

export const profileFormSchema = z.object({
    publicName: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    description: z
      .string()
      .min(10, {
        message: "Description must be at least 10 characters.",
      })
      .max(300, {
        message: "Description must be at most 300 characters.",
      })
      .optional(),
    infoButtonEnable: z.boolean().optional(),
    infoButtonText: z
      .string()
      .min(2, {
        message: "Button text must be at least 2 characters.",
      })
      .optional(),
    infoButtonLink: z
      .string()
      .url({
        message: "Please enter a valid URL.",
      })
      .optional(),
  });
  