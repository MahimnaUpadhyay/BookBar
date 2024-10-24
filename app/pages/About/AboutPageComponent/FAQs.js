import React from 'react'
import Heading from '@/app/components/Heading'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQs = () => {
    return (
        <>
            <Heading
                HeadingName={"FAQ's"}
            />

            <div className="flex flex-col gap-5 w-[800px]">
                {/* Shipping */}
                <Accordion type="single" collapsible className="w-full bg-accent p-1 rounded-sm">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-xl">What are your shipping times?</AccordionTrigger>
                        <AccordionContent className="bg-white p-1 rounded-md text-lg">
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* Payment */}
                <Accordion type="single" collapsible className="w-full bg-accent p-1 rounded-sm">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-xl">How can I pay for my order?</AccordionTrigger>
                        <AccordionContent className="bg-white p-1 rounded-md text-lg">
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* Return Policy */}
                <Accordion type="single" collapsible className="w-full bg-accent p-1 rounded-sm">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-xl">What are the return policy?</AccordionTrigger>
                        <AccordionContent className="bg-white p-1 rounded-md text-lg">
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* Change or Cancel */}
                <Accordion type="single" collapsible className="w-full bg-accent p-1 rounded-sm">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-xl">How do I change or cancel the order?</AccordionTrigger>
                        <AccordionContent className="bg-white p-1 rounded-md text-lg">
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    )
}

export default FAQs