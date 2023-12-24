import { NextResponse, NextRequest } from "next/server";
import prisma
 from "@/lib/prismadb";
export async function POST( req : NextRequest) {
    const email = await req.json()
    try {
        await prisma.waitlist.create({
            data: {
                email: email.email
            }
        })
        return new NextResponse(JSON.stringify({message: "Thanks for join, We'll reach out to you as soon as our platform launches."}), {status: 200})  
    } catch (error) {
        return new NextResponse(JSON.stringify({message: "Something went wrong, please try again later."}), {status: 500})
    }
}