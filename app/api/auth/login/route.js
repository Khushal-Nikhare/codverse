import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@codverse.tech';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'password123';
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-123';

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '7d' });
      const cookie = serialize('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      });
      return NextResponse.json({ success: true }, { headers: { 'Set-Cookie': cookie } });
    }
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
