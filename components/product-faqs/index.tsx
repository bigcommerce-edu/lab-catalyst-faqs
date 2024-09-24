import ProductFaqsList from '~/components/product-faqs/faqs-list';
import { formatFaqsCollection, MetafieldsQuery } from './_data/component-data';
import { cache } from 'react';

import { client } from '~/client';

export const getProductFaqMetafields = cache(
  async (
    productId: number
  ) => {
    return Promise.resolve({
      endCursor: null,
      faqs: [],
    });
  }
);

const Faqs = async ({ productId }: { productId: number }) => {
  return Promise.resolve(null);
};

export default Faqs;
