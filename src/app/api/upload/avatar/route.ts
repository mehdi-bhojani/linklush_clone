
import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const data = await req.formData();
        const file = data.get('file') as File | null;

        if (!file) {
            return NextResponse.json({ message: "no image found", success: false });
        }

        const byteData = await file.arrayBuffer();
        const buffer = Buffer.from(byteData);
        const path = `./public/avatars/${file.name}`; // Adjust path if necessary

        await writeFile(path, buffer);

        return NextResponse.json({ message: "file uploaded", success: true });
    } catch (error) {
        console.error('Error uploading file:', error);
        return NextResponse.json({ message: "file upload failed", success: false });
    }
}
