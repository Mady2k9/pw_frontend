export interface downloadAppSectionType {
  _id: string;
  sectionTitle: string;
  sectionSubTitle: string;
  sectionProps: {
    backGroundColor: string;
    mwebImage: string;
    dwebImage: string;
    appDownloadOption: {
      image: string;
      redirectionUrl: string;
    }[];
  };
}
