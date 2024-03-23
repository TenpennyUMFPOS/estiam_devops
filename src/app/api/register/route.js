import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import bcrypt from 'bcrypt';
export async function POST(request) {
    const res = await request.json();
    const { name, email, password } = res;
    console.log({ res });
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })
    return NextResponse.json({ result })
}
