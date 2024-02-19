export interface StatsSectionProps {
  sectionTitle: string;
  sectionSubTitle: string;
  sectionProps: {
    title: string;
    stats: string;
    icon: string;
    backGroundColor: string;
    displayOrder: number;
  }[];
  cta: {
    text: string;
    textColor: string;
    backGroundColor: string;
    ctaRedirectionUrl: string;
    altText: string;
    hoverColor: string;
  };
}
