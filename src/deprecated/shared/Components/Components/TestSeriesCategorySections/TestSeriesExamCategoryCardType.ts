export interface ExamCategoryCardType {
  categoryName: string;
  displayOrder: number;
  icon: string;
  options: CardOptionsType[];
  redirectionUrl: string;
}

export interface CardOptionsType {
  className: string;
  redirectionUrl: string;
}
