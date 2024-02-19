import { useLottie } from 'lottie-react';
import lottie from '@/deprecated/assets/lotties-data/loading.json';

const LoadingLottie = () => {
  const options = {
    animationData: lottie,
    loop: true,
  };

  const { View } = useLottie(options);
  return View;
};

export default LoadingLottie;
