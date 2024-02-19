import { useLottie } from 'lottie-react';
import lottie from '@/deprecated/assets/lotties-data/success.json';

const Success = () => {
  const options = {
    animationData: lottie,
    loop: true,
  };

  const { View } = useLottie(options);
  return View;
};

export default Success;
