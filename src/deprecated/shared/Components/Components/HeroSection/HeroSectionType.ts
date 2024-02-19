export interface HeroSectionProps {
  sectionTitle: string;
  sectionSubTitle: string;
  sectionProps: {
    dWeb: dWeb[];
    mWeb: mWeb[];
    gradientCss: string;
  };
  cta: {
    text: string;
    textColor: string;
    backGroundColor: string;
    ctaRedirectionUrl: string;
    altText: string;
    hoverColor: string;
  };
}

export interface dWeb {
  icon: string;
  text: string;
  textColor: string;
  chatBoxColor: string;
  displayOrder: string;
}

export interface mWeb {
  icon: string;
  text: string;
  textColor: string;
  chatBoxColor: string;
  displayOrder: string;
}
