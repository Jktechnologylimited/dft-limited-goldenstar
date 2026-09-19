import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/faq";

export function FaqAccordion({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((faq, i) => (
        <AccordionItem key={faq.question} value={`item-${i}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
