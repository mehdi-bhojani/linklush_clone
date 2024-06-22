// src/app/api/link-preview/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getLinkPreview } from 'link-preview-js';

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'No URL provided' }, { status: 400 });
  }

  try {
    const data = await getLinkPreview(url);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch link preview' }, { status: 500 });
  }
};
