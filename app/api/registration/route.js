// app/api/register/route.ts
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
// import bcrypt from 'bcryptjs';

const uri = 'mongodb://127.0.0.1:27017'; // your local MongoDB URI
const client = new MongoClient(uri);
const dbName = 'nextjs_auth'; // your database name

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, password } = body;

    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json({ success: false, message: 'All fields are required.' }, { status: 400 });
    }

    await client.connect();
    const db = client.db(dbName);
    const usersCollection = db.collection('users');

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ success: false, message: 'Email already registered.' }, { status: 409 });
    }

    // const hashedPassword = await bcrypt.hash(password, 10);

    await usersCollection.insertOne({
      firstName,
      lastName,
      email,
      password,
      //   password: hashedPassword,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, message: 'User registered successfully.' });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
