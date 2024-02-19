export interface YouTubeCardsSectionProps {
  sectionTitle: string;
  sectionSubTitle: string;
  sectionProps: {
    channelName: string;
    subscribers: number;
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
