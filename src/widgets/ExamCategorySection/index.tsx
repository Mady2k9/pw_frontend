import ExamCategoryCard, { ExamCategoryProps } from './ExamCategoryCard';
import TestPassCard from '@/widgets/TestPassCard';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ExamCategorySectionProps {
  title?: string;
  description?: string;
  categories?: ExamCategoryProps[];
  ctaText?: string;
  ctaAltText?: string;
  ctaColor?: string;
}

export default function ExamCategorySection({
                                              title,
                                              ctaText,
                                              ctaAltText,
                                              ctaColor,
                                              description,
                                              categories,
                                            }: ExamCategorySectionProps) {
  const [showAll, setShowAll] = useState(false);
  const categoriesToDisplay = categories?.filter((cat) => cat.exams.length > 0);
  const sortedCategories = categoriesToDisplay?.sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <div className={'container'}>
      {title && <h2 className={'text-xl md:text-4xl font-bold text-center '}>{title}</h2>}
      {description &&
        <p className={'text-center text-sm font-medium md:text-lg text-light max-w-3xl mx-auto mt-3'}>{description}</p>}
      <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:m-6'}>
        {
          (showAll ? sortedCategories : sortedCategories?.slice(0, 6))?.map((category, index) => (
            category.exams.length != 0 && 
         <ExamCategoryCard key={index} {...category}  />
       
          ))
        }
      </div>
      {
        categoriesToDisplay?.length! > 6 &&
        <div className={'flex justify-center '}>
          <Button variant={'link'}
                  size={'lg'}
                  style={ctaColor ? { color: ctaColor } : {}}
                  onClick={() => setShowAll(!showAll)}>
            {!showAll ? (ctaText || `View All Categories `) : (ctaAltText || 'View Less Categories')}
          </Button>
        </div>
      }
    </div>
  );
}
