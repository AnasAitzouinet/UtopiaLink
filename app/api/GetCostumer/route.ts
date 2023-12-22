import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function GET(){
    const email = "anasaw2434x6@gmail.com"
    const paymentIntents = (await stripe.paymentIntents.retrieve('pi_3ONlOaGxs8RYIh5G0Gg6Utug'))
    const costumer = await stripe.customers.retrieve('cus_PC0T4p9urvU0lO')
    const paymentMethods = await stripe.paymentMethods.retrieve('pm_1ONcwSGxs8RYIh5GfyYI0kPf')
    // const costumer = subscription.customer ? await stripe.customers.list({email: email}) : null

    return new NextResponse(JSON.stringify({ paymentIntents , costumer , paymentMethods}));
   
}