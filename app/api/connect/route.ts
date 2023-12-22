import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

export async function GET(){
    const account = await stripe.accounts.create({
        type: 'express',
        
      });
      

}