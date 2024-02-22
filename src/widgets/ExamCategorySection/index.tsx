import ExamCategoryCard, { ExamCategoryProps } from './ExamCategoryCard';
import TestPassCard from '@/widgets/TestPassCard';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ExamCategorySectionProps {
  title?: string;
  description?: string;
  categories?: ExamCategoryProps[];
}

export default function ExamCategorySection({ title, description, categories }: ExamCategorySectionProps) {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className={'container py-4  md:py-8'}>
      {title && <h2 className={'text-xl md:text-4xl font-bold text-center '}>{title}</h2>}
      {description &&
        <p className={'text-center text-sm font-medium md:text-lg text-light max-w-3xl mx-auto mt-3'}>{description}</p>}
      <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-10'}>
        {
          (showAll ? categories : categories?.slice(0, 6))?.map((category, index) => (
            <ExamCategoryCard key={index} {...category} slug={index + ''} />
          ))
        }
      </div>
      {
        categories?.length! > 6 &&
        <div className={'flex justify-center mt-6'}>
          <Button variant={'link'}
                  size={'lg'}
                  onClick={() => setShowAll(!showAll)}>
            {!showAll ? `View All Categories (${categories?.length})` : 'View Less Categories'}
          </Button>
        </div>
      }
    </div>
  );
}
