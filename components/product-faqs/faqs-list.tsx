'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';

import { formatFaqsCollection } from './_data/component-data';

import getNextProductFaqs from './_actions/get-next-product-faqs';

const ProductFaqsList = ({
  productId,
  limit,
  faqCollection
}: {
  productId: number;
  limit: number;
  faqCollection: Awaited<ReturnType<typeof formatFaqsCollection>>;
}) => {
  const [faqs, setFaqs] = useState(faqCollection.faqs);

  return (
    <>
      <Accordion type="multiple">
        {faqs.map((faq) => (
          <AccordionItem className="my-2 border border-gray-200 p-2"
            key={faq.key} value={faq.key}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default ProductFaqsList;
