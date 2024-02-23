import React, { useEffect, useState } from 'react';
import { Image } from '@/components/ui/image';
import Vector from '../../../../assets/Images/Schools/Vector-1.webp';
interface PublishingCardProps {
  data: {
    title: string;
    description: string;
    mwebImage: string;
    dwebImage: string;
    TopTitle: string;
    bgColor: string;
  }[];
  onStateChange: (selectedCard: string) => void;
}

function PoupCard({ data, onStateChange }: PublishingCardProps) {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    if (data && data[index] && data[index].title) {
      const selectedCardTitle = data[index].title;
      if (selectedCard != index) {
        setSelectedCard((prevIndex) => (prevIndex === index ? null : index));
      }

      onStateChange(selectedCardTitle);
    }
  };
  useEffect(() => {
    setSelectedCard(0);
  }, []);
  return (
    <div
                          // key={index}
                          className="w-full flex"
                        >
      {data?.map((item, index) => (
        <div
          key={index}
          className={`border relative bg-white rounded-lg mb-4 w-[360px]`}
          style={{
            border: '1px solid var(--PW-Gray-Palette-900-PW-Neutral, #1B2124)',
            boxShadow: '0px 4px 0px 0px #000',
            backgroundColor: selectedCard === index ? '#FFF0E7' : 'white',
          }}
          onClick={() => handleCardClick(index)}
        >
          <div
            className={`border text-[12px] leading-[18px] font-[600] text-white px-[15px] rounded-2xl bg-black mx-[10px] whitespace-nowrap absolute top-[-11px] z-10 xl:left-[90px] left-[54px]`}
          >
            {item.TopTitle}
          </div>

          <div className="flex flex-col px-[24px] py-[18px]">
            <div className="flex justify-between">
              <div
                className="font-bold leading-[32px] mb-3 text-[24px] text-black text-start cursor-pointer"
                onClick={() => handleCardClick(index)}
              >
                {item.title}
              </div>

              {selectedCard === index && (
               
                <img src={`${Vector.src}`}  alt ='webp' className={
                       'h-[32px] w-[32px] bg-center bg-no-repeat bg-cover rounded-lg '
                     }/>
              )}
            </div>

            <div className="font-medium leading-[24px] text-[16px]  my-3 text-[#3D3D3D]">
              {item.description}
            </div>
           
            <Image src={`${item.mwebImage}`}  alt ='webp' className={
                'xl:w-[277px] xl:h-[162px] w-[200px] h-[126px] bg-center bg-no-repeat bg-cover rounded-lg '
              }/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PoupCard;
