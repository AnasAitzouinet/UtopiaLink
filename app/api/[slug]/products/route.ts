import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";


export async function GET(request: Request,
  { params }: { params: { slug: string } }) {
  const id = params.slug
  return new NextResponse(JSON.stringify({ id }));
}