import Image from '../Atoms/Image/Image';
import Chips from '../Atoms/Chips/Chips';
import Text from '../Atoms/Text/Text';
import WhatsappIcon from '../../../assets/Images/whatsapp.webp';

const BatchCardHeader = ({
  title,
  showNewChip,
  whatsAppUrl,
}: {
  title: string;
  whatsAppUrl: string;
  showNewChip?: boolean;
}) => {
  const handleShare = () => {
    const encodedUrl = encodeURIComponent(window.location.origin + whatsAppUrl);
    const whatsAppShareUrl = `https://wa.me/?text=Check%20out%20this%20link%3A%20${encodedUrl}`;
    window.open(whatsAppShareUrl);
  };
  return (
    <div className="flex items-start gap-2.5 mb-[14px] min-h-[56px] justify-between ">
      <Text
        title={title}
        style="text-lg line-clamp-2 font-bold text-[#1B2124]"
      />
      <div className="flex gap-2">
        {showNewChip && (
          <Chips
            className="bg-[#FBDE47] font-bold px-[8px] py-[1px] text-[12px] leading-[18px] rounded-[4px] m-auto"
            title="New"
          />
        )}
        <Image
          bgImagetitle={WhatsappIcon.src}
          className="w-[32px] h-[32px] bg-center bg-no-repeat bg-contain cursor-pointer"
          onClick={handleShare}
        />
      </div>
    </div>
  );
};

export default BatchCardHeader;
