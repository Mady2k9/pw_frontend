import lottie from '@/deprecated/assets/lotties-data/confetti.json';
import { useLottie } from 'lottie-react';

const ConfettiLottie = ({ ...props }) => {
  const options = {
    animationData: lottie,
    loop: true,
  };

  const { View } = useLottie(options);
  return View;
};

export default ConfettiLottie;
