import { ExamCategoryCardType } from '../../Molecules/ExamCategoryCard/ExamCategoryCardType';

export interface ExamCategoryType {
  expiredAt: string;
  sectionProps: ExamCategoryCardType[];
  sectionSubTitle: string;
  sectionTitle: string;
  _id: string;
  cta: {
    text: string;
    textColor: string;
    backGroundColor: string;
    altText: string;
  };
}
