import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

const emailSchema = z.object({
  email: z.email({ message: 'Invalid email address' }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const validationResult = emailSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.issues[0].message },
        { status: 400 }
      );
    }
    
    const { email } = validationResult.data;
    
    const existingEmail = await prisma.email.findUnique({
      where: { email },
    });
    
    if (existingEmail) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }
    
    const newEmail = await prisma.email.create({
      data: { email },
    });
    
    return NextResponse.json(
      { message: 'Joined the waitlist', data: newEmail },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving email:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

