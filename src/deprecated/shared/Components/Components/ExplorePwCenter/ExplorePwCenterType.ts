import { exploreCityCardsType } from '../../Molecules/ExplorePwCityCards/ExplorePwCityCardsType';

export interface ExplorePwCenterType {
  _id: string;
  sectionTitle: string;
  sectionSubTitle: string;
  cta?:any;
  sectionProps: {
    redirectionUrl: string;
    videoUrl: string;
    title: string;
    subtitle: string;
    centers: exploreCityCardsType[];
    videoOverlayColor?: string
  };
  expiredAt: string;
}
