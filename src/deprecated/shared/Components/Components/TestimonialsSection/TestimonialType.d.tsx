export interface StudentformProps {
  sectionTitle: string;
  sectionSubTitle: string;
  sectionProps: {
    studentName: string;
    exam: string;
    rank: string;
    dwebBannerImages: string;
    mwebBannerImages: string;
    testimonial: string;
    icon: string;
    video: string;
    displayOrder: number;
  }[];
}
