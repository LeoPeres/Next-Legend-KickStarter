import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../../components/ui/accordion";

export const SingleAccordion = () => (
  <Accordion type="single" collapsible className="w-full max-w-md">
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Is it styled?</AccordionTrigger>
      <AccordionContent>
        Yes. It comes with default styles that match the other components' aesthetic.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Is it animated?</AccordionTrigger>
      <AccordionContent>
        Yes. It's animated by default, but you can disable it if you prefer.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const MultipleAccordion = () => (
  <Accordion type="multiple" className="w-full max-w-md">
    <AccordionItem value="item-1">
      <AccordionTrigger>First section</AccordionTrigger>
      <AccordionContent>This is the first section content.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Second section</AccordionTrigger>
      <AccordionContent>This is the second section content.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Third section</AccordionTrigger>
      <AccordionContent>This is the third section content.</AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const CustomStyledAccordion = () => (
  <Accordion type="single" collapsible className="w-full max-w-md border rounded-lg">
    <AccordionItem value="item-1" className="border-b-0 px-4">
      <AccordionTrigger className="py-6 text-blue-600">Custom styled trigger</AccordionTrigger>
      <AccordionContent className="text-gray-600">
        This accordion has custom styling applied to it.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2" className="border-b-0 px-4">
      <AccordionTrigger className="py-6 text-blue-600">Another custom section</AccordionTrigger>
      <AccordionContent className="text-gray-600">
        You can customize the appearance of the accordion to match your design system.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const AccordionExamples = () => (
  <div className="space-y-8">
    <div>
      <h3 className="text-lg font-medium mb-2">Single Accordion (Collapsible)</h3>
      <SingleAccordion />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2">Multiple Accordion</h3>
      <MultipleAccordion />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2">Custom Styled Accordion</h3>
      <CustomStyledAccordion />
    </div>
  </div>
);
