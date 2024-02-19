import { exploreCityCardsType } from '../../Molecules/ExplorePwCityCards/ExplorePwCityCardsType';

export interface ExplorePwCenterType {
  _id: string;
  sectionTitle: string;
  sectionSubTitle: string;
  sectionProps: {
    redirectionUrl: string;
    videoUrl: string;
    videoOverlayColor: string;
    title: string;
    subtitle: string;
    centers: exploreCityCardsType[];
  };
  cta: {
    text: string;
    textColor: string;
    backGroundColor: string;
    ctaRedirectionUrl: string;
    altText: string;
    hoverColor: string;
  };
  expiredAt: string;
}
