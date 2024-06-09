import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const data = await req.formData();
        const file = data.get('file') as File | null;

        if (!file) {
            return NextResponse.json({ message: "No image found", success: false });
        }

        const byteData = await file.arrayBuffer();
        const buffer = Buffer.from(byteData);
        const path = `./public/backgrounds/${file.name}`; // Adjust path if necessary

        await writeFile(path, buffer);

        // Construct the URL based on the file path
        const filePath = path.replace('./public', ''); // Remove the leading './public'
        const fileUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${filePath}`; // Adjust base URL if necessary

        return NextResponse.json({ message: "File uploaded", success: true, fileUrl });
    } catch (error) {
        console.error('Error uploading file:', error);
        return NextResponse.json({ message: "File upload failed", success: false });
    }
}
