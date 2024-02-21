import { useRouter } from 'next/router';
import eventTracker from '../../EventTracker/eventTracker';

const LoginButton = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  const router = useRouter();
  const handleClick = () => {
    eventTracker.authPageVisit(text, 'home_page');
    const baseUrl = window.location;
    router.push(
      `${process.env.NEXT_PUBLIC_PP_HOME_BASE_URL}study/auth?redirect_url=${baseUrl}`
    );
  };

  return (
    <button
      className={` ${className}  rounded-md hover:bg-[#4437B8] transition-all duration-200 bg-[#5A4BDA] items-center text-white font-semibold leading-[27px] text-[17px]`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default LoginButton;
