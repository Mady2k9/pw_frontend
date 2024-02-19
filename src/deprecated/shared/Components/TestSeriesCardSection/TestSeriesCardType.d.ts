export interface ResultType {
  title: string;
  banner: string;
  usedFor: string;
  features: string[];
  startDate: string;
  endDate: string;
  originalCost: string;
  updatedCost: string;
  language: string;
}

export interface BatchCardContainer {
  showBatchCards?: boolean;
  mainHeading: string;
  showViewAllBtn?: boolean;
  showTitle?: boolean;
  showAllCourses?: boolean;
  viewAllUrl?: string;
}
export interface BatchCardContainer {
  mainHeading: string;
  showAllCourses?: boolean;
  BatchData?: BatchData[];
}
