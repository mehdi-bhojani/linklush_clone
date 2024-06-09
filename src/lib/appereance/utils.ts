import { ChangeEvent } from 'react';
import { z } from 'zod';

export type RegisterCircleInputClient = {
    circle_image: string;
    // ...other definitions
};

// Define the schema
export const registerCircleSchemaClient = z.object({
    circle_image: z
        .any() // Assuming this is meant to represent a file, consider using a more specific type if possible
        .refine((file: any) => file?.length === 1, 'Photo is required.')
        .refine((file: any) => file[0]?.size <= 3000000, 'Max file size is 3MB.'),
});

export function getImageData(event: ChangeEvent<HTMLInputElement>) {
    // FileList is immutable, so we need to create a new one
    const dataTransfer = new DataTransfer();

    // Add newly uploaded images
    Array.from(event.target.files!).forEach((image) =>
        dataTransfer.items.add(image)
    );

    const files = dataTransfer.files;
    const displayUrl = URL.createObjectURL(event.target.files![0]);

    return { files, displayUrl };
}