export interface ExamCategoryCardType {
  categoryName: string;
  displayOrder: number;
  icon: string;
  iconBackgroundColor: string;
  options: CardOptionsType[];
  redirectionUrl: string;
  title?: string;
  color?: string;
  image?: string;
  cohorts?: string[];
}

export interface CardOptionsType {
  className: string;
  redirectionUrl: string;
}

export interface cta {
  text: string;
  textColor: string;
  backGroundColor: string;
  ctaRedirectionUrl: string;
}
