"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";

const faqs = [
  {
    question: "Can I use Utopia if I'm not a registered business entity?",
    answer:
      "Yes! Utopia empowers individuals and freelancers to sell online without the need for formal business registration.",
  },
  {
    question: "How do I get paid?",
    answer:
      "We've partnered with Wise (formerly TransferWise) for payment processing.Link your Wise account to Utopia and conveniently receive payments directly into your bank account. Don't have an account? No problem—simply provide your RIB or IBAN details to receive payments.",
  },
  {
    question:
      "Is there a limit on the number of transactions I can process using Utopia?",
    answer:
      "No. Utopia does not impose transaction limits. You can process as many transactions as needed without limitations",
  },
  {
    question:
      "How long does it take for funds to reach my account after a successful transaction?",
    answer:
      "Typically, funds are transferred promptly after a successful transaction. The duration may vary based on the banking process, but we strive for swift transfers.",
  },
  {
    question:"Does Utopia support recurring payments or subscription-based models?",
    answer:"Yes, Utopia offers support for recurring payments and subscription models, enabling you to manage ongoing transactions effortlessly."
  }
];

export default function FAQ() {
  return (
    <div id="faqs" className="w-full h-full px-5 py-8 flex flex-col justify-center text-white gap-3">
      <span className="text-center bg-yellow-300 text-black rounded-xl w-1/4 lg:w-[150px] mx-auto">
        FAQs
      </span>
      <h1 className="text-4xl text-center text-white lg:px-10">
        Frequently Asked Questions
      </h1>
      <h2 className="text-center text-gray-300">
        we have put together some commonly asked questions{" "}
      </h2>
      <Accordion
        type="single"
        collapsible
        className="w-full text-xl lg:px-[20%] text-start"
      >
        {
          faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-start">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))
        }

      </Accordion>
    </div>
  );
}
