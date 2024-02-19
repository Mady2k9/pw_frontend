import eventTracker from '../../EventTracker/eventTracker';

const LoginButton = ({
  text,
  className,
  redirectionUrl,
}: {
  text: string;
  className: string;
  redirectionUrl?: string;
}) => {
  const handleClick = () => {
    eventTracker.authPageVisit(text, 'home_page');
    const baseUrl = window.location;
    if (redirectionUrl) {
      window.open(
        `${
          process.env.NEXT_PUBLIC_PP_HOME_BASE_URL
        }study/auth?redirect_url=${`${process.env.NEXT_PUBLIC_PP_HOME_BASE_URL}${redirectionUrl}`}`,
        '_parent'
      );
    } else
      window.open(
        `${process.env.NEXT_PUBLIC_PP_HOME_BASE_URL}study/auth?redirect_url=${baseUrl}`,
        '_parent'
      );
    // router.push('/study');
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
