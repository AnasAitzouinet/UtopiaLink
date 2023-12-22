import Stripe from "stripe";
import { headers } from "next/headers"
import { NextResponse } from "next/server";

import prisma from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
    const body = await req.text();
    const signature = headers().get("Stripe-Signature") as string;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (error: any) {
        return new NextResponse(JSON.stringify({ error: error.message }), { status: 400 });
    }

    const session = event.data.object as Stripe.Checkout.Session;
    if (event.type === "checkout.session.completed") {
        // const subscription = await stripe.subscriptions.retrieve(session.subscription as string);
        const paymentIntent = await stripe.paymentIntents.retrieve(session.payment_intent as string);

        if (!session?.metadata?.userId) {
            return new NextResponse(JSON.stringify({ error: "Missing metadata" }), { status: 400 });
        }

        if (paymentIntent) {
            await prisma.paymentIntent.create({
                data: {
                    stripePaymentIntentId: paymentIntent.id as string,
                    amount: paymentIntent.amount as number,
                    userId: session.metadata.userId,
                    stripeCustomerId: paymentIntent.customer as string,
                },
            });
        // } else if (subscription) {
        //     await prisma.userSubscription.create({
        //         data: {
        //             userId: session.metadata.userId,
        //             stripeCustomerId: subscription.customer as string,
        //             stripeSubscriptionId: subscription.id as string,
        //             stripePriceId: subscription.items.data[0].price.id,
        //             stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
        //         },
        //     });
        }
    }

    if (event.type === 'invoice.payment_succeeded') {
        const subscription = await stripe.subscriptions.retrieve(session.subscription as string);

        if (!session?.metadata?.userId) {
            return new NextResponse(JSON.stringify({ error: "Missing metadata" }), { status: 400 });
        }

        await prisma.userSubscription.update({
            where: {
                stripeSubscriptionId: subscription.id as string,
            },
            data: {
                stripePriceId: subscription.items.data[0].price.id,
                stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
            },
        });
    }


    return new NextResponse("ok", { status: 200 });
}