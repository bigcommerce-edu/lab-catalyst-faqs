'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';
import { Button } from '~/components/ui/button';

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
  const [endCursor, setEndCursor] = useState(faqCollection.endCursor);
  const [pending, setPending] = useState(false);

  const t = useTranslations('Product.FAQ');

  const getNextFaqs = async () => {
    setPending(true);

    try {
      const nextFaqData = await getNextProductFaqs(productId, limit, endCursor);

      setEndCursor(nextFaqData.endCursor);
      setFaqs(faqs.concat(nextFaqData.faqs));
    } catch (err) {
      // Handle error
    }

    setPending(false);
  };

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
      {endCursor !== null && (
        <div className="mx-auto md:w-2/3 lg:w-1/3">
          <Button
            loading={pending}
            onClick={getNextFaqs}
            variant="secondary"
          >
            {t('loadMore')}
          </Button>
        </div>
      )}
    </>
  );
};

export default ProductFaqsList;
