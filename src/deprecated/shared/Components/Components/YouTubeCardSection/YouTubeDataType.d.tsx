export interface YouTubeCardsSectionProps {
  sectionTitle: string;
  sectionSubTitle: string;
  sectionProps: {
    channelName: string;
    subscribers: number;
    displayOrder: number;
  }[];
}
