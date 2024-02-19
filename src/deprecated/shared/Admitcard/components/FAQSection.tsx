export class Faq {
  status: string;
  displayOrder: number;
  _id: string;
  title: string;
  description: string;
  organizationId: string;
  categoryId: string;
  slug: string;
  createdAt: string;
  updatedAt: string;

  constructor(data: Faq) {
    data = data || {};

    this.status = data.status || '';
    this.displayOrder = data.displayOrder || 0;
    this._id = data._id || '';
    this.title = data.title || '';
    this.description = data.description || '';
    this.organizationId = data.organizationId || '';
    this.categoryId = data.categoryId || '';
    this.slug = data.slug || '';
    this.createdAt = data.createdAt || '';
    this.updatedAt = data.updatedAt || '';
  }
}

import FAQ from './common/FAQ';
import React, { useEffect, useState } from 'react';
import { PredictorVariant } from '../types';

const FAQSection = ({ variant }: { variant: PredictorVariant }) => {
  const [faqData, setFaqData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const getFaqId: any = () => {
    if (variant === 'JEE_MAIN')
      return process.env.NEXT_PUBLIC_JEE_FAQ_ID as string;
    // else if (variant === 'CAT')
    //   return process.env.NEXT_PUBLIC_CAT_ANSWER_FAQ_ID as string;
    // else if (variant === 'NEET')
    //   return process.env.NEXT_PUBLIC_NEET_FAQ_ID as string;
    // else if (variant === 'NEET_ANSWER_KEY')
    //   return process.env.NEXT_PUBLIC_NEET_ANSWER_FAQ_ID as string;
    // else if (variant === 'ANJAAM_JEE_TEST_SERIES')
    //   return process.env.NEXT_PUBLIC_ANJAAM_TEST_SERIES_FAQ_ID as string;
    // else if (variant === 'JEE_ADVANCED')
    //   return process.env.NEXT_PUBLIC_JEE_ADVANCED_FAQ_ID as string;
    // else return process.env.NEXT_PUBLIC_GATE_FAQ_ID as string;
  };

  const BASE_URL = process.env.NEXT_PUBLIC_PP_API_BASE_URL;
  const OrgID = process.env.NEXT_PUBLIC_PP_ORG_ID;

  const fetchFaq = async () => {
    const getFaqUrl = (faqCatId: string) =>
      `v1/faq-category/${faqCatId}/list?organizationId=${OrgID}`;
    const response = await fetch(`${BASE_URL}${getFaqUrl(getFaqId())}`).then(
      (res) => res.json()
    );
    if (response?.success) {
      setFaqData(response.data);
      setIsLoading(true);
    } else {
      console.log('FAQs Fetch Error');
    }
  };

  useEffect(() => {
    fetchFaq();
  }, []);

  return (
    <div className="pt-14 pb-20 relative">
      <div className="flex justify-center ">
        <span className="text-[20px] md:text-[32px] font-bold">
          Frequently Asked Questions
        </span>
      </div>
      <div className="flex flex-col w-full px-3 xl:px-0 max-w-6xl mx-auto">
        <FAQ items={faqData} hideFAQTitle />
      </div>
    </div>
  );
};

export default FAQSection;
