export interface studyresourcesProps {
  sectionTitle: string;
  sectionSubTitle: string;
  sectionProps: {
    description: string;
    title: string;
    dwebImage: string;
    mwebImage: string;
    bgColor: string;
    redirectionUrl: string;
    cardColor: string;
    cardHoverColor: string;
  }[];
}
