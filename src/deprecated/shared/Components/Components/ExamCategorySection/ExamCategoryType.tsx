import { ExamCategoryCardType } from '../../Molecules/ExamCategoryCard/ExamCategoryCardType';

export interface ExamCategoryType {
  expiredAt: string;
  sectionProps: ExamCategoryCardType[];
  sectionSubTitle: string;
  sectionTitle: string;
  _id: string;
}
