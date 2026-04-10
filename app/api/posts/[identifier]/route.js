import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Post from '@/models/Post';

export async function GET(request, { params }) {
  await dbConnect();
  try {
    const { identifier } = params;
    // Check if identifier is a valid ObjectId, if not search by slug
    const post = identifier.match(/^[0-9a-fA-F]{24}$/) 
      ? await Post.findById(identifier)
      : await Post.findOne({ slug: identifier });
      
    if (!post) return NextResponse.json({ success: false, error: 'Post not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: post });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function PUT(request, { params }) {
  await dbConnect();
  try {
    const { identifier } = params;
    const body = await request.json();
    const post = await Post.findByIdAndUpdate(identifier, body, { new: true, runValidators: true });
    if (!post) return NextResponse.json({ success: false, error: 'Post not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: post });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  await dbConnect();
  try {
    const { identifier } = params;
    const post = await Post.findByIdAndDelete(identifier);
    if (!post) return NextResponse.json({ success: false, error: 'Post not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
