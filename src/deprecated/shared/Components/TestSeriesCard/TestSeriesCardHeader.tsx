import Image from '../Atoms/Image/Image';
import Chips from '../Atoms/Chips/Chips';
import Text from '../Atoms/Text/Text';

const TestSeriesCardHeader = ({
  title,
  showNewChip,
}: {
  title: string;
  showNewChip?: boolean;
}) => {
  const handleShare = () => {
    const url = encodeURIComponent('https://your-website-url.com');
    const message = encodeURIComponent('Check out this link: ');
    const whatsappUrl = `whatsapp://send?text=${message}${url}`;
    window.location.href = whatsappUrl;
  };
  return (
    <div className="flex items-start gap-2.5 mb-[14px] ">
      <Text title={title} style="text-lg font-bold text-[#1B2124]" />
      <div className="flex gap-2">
        {showNewChip && (
          <Chips
            className="bg-[#FBDE47] font-bold px-[8px] py-[1px] rounded-[4px] m-auto"
            title="New"
          />
        )}
        <Image
          bgImagetitle="/whatsapp.webp"
          className="w-[32px] h-[32px] bg-center bg-no-repeat bg-contain cursor-pointer "
          onClick={handleShare}
        />
      </div>
    </div>
  );
};

export default TestSeriesCardHeader;
