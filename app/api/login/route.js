// app/api/login/route.ts
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
// import bcrypt from 'bcryptjs';

const uri = 'mongodb://127.0.0.1:27017'; // local MongoDB
const client = new MongoClient(uri);
const dbName = 'nextjs_auth';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required.' },
        { status: 400 }
      );
    }

    await client.connect();
    const db = client.db(dbName);
    const usersCollection = db.collection('users');

    const user = await usersCollection.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Invalid Email.' },
        { status: 401 }
      );
    }

    // Compare password directly (insecure, but bcrypt is commented out)
    if (user.password !== password) {
      return NextResponse.json(
        { success: false, message: 'Invalid Password.' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Login successful!',
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
