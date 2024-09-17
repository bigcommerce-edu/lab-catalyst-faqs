'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Accordions } from '~/components/ui/accordions';

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
      <Accordions
        accordions={faqs.map(faq => {
          return {
            content: faq.answer,
            title: faq.question,
          }
        })}
        type="multiple"
      />
    </>
  );
};

export default ProductFaqsList;
