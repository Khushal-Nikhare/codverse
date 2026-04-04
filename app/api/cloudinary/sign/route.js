import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function POST(req) {
  try {
    const body = await req.json();
    const timestamp = Math.floor(Date.now() / 1000);
    const folder = body.folder || 'codverse';
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

    const signature = cloudinary.utils.api_sign_request(
      {
        folder,
        timestamp,
        upload_preset: uploadPreset,
      },
      process.env.CLOUDINARY_API_SECRET
    );

    return NextResponse.json({
      timestamp,
      folder,
      uploadPreset,
      apiKey: process.env.CLOUDINARY_API_KEY,
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      signature,
    });
  } catch {
    return NextResponse.json({ error: 'Unable to sign upload request' }, { status: 500 });
  }
}
