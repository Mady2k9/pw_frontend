import lottie from '@/deprecated/assets/lotties-data/thankyou.json';
import { useLottie } from 'lottie-react';

const ThankYouLottie = ({ ...props }) => {
  const options = {
    animationData: lottie,
    loop: true,
  };

  const { View } = useLottie(options);
  return View;
};

export default ThankYouLottie;
