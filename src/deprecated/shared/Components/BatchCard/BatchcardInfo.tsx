import Image from '../Atoms/Image/Image';
import Text from '../Atoms/Text/Text';
import PersonImage from '../../../assets/Images/person.webp';
import CalendarIcon from '../../../assets/Images/calender.webp';
import StarIcon from '../../../assets/Images/star.webp';

const BatchCardInfo = ({
  usedFor,
  features,
  startDate,
  endDate,
}: {
  usedFor: string;
  features: { key: string; value?: string }[];
  startDate: string;
  endDate: string;
}) => {
  return (
    <div className="flex flex-col px-[1px] gap-1.5 my-4 min-h-[66px] ">
      {usedFor && (
        <div className="flex gap-1 flex-row items-center text-[#757575] text-[12px] leading-[18px] font-[600] ">
          <Image
            bgImagetitle={PersonImage.src}
            className="w-[12px] h-[14px] bg-center bg-no-repeat my-[2px] mx-[2px]"
          />
          <div className="flex items-center">
            <Text style={'mx-[2px]'} title={'For'} />
            <Text style={'text-[#1B2124]'} title={usedFor} />
          </div>
        </div>
      )}

      {features?.filter((f) => f.value).length > 0 && (
        <div className="flex gap-1 flex-row items-center text-[#757575] text-[12px] leading-[18px] font-[600] ">
          <Image
            bgImagetitle={StarIcon.src}
            className="w-[12px] h-[14px] bg-center bg-no-repeat my-[2px] mx-[2px]"
          />
          {features
            ?.filter((f) => f.value)
            .slice(0, 2)
            ?.map((data, i) => {
              return (
                <>
                  <Text
                    key={data.key}
                    style={'mx-[2px] capitalize'}
                    title={
                      data.value
                        ? `${data.value} ${data.key?.replace(
                            /_/g,
                            ' '
                          )}`.toLowerCase()
                        : ''
                    }
                  />
                  {i != features?.slice(0, 2)?.length - 1 ? (
                    <span className="border border-[#D9DCE1] h-[18px] mx-[4px]" />
                  ) : null}
                </>
              );
            })}
        </div>
      )}

      <div className="flex gap-1 flex-row items-center text-[#757575] text-[12px] leading-[18px] font-[600] ">
        <Image
          bgImagetitle={CalendarIcon.src}
          className="w-[12px] h-[14px] bg-center bg-no-repeat my-[2px] mx-[2px]"
        />
        <Text style={'mx-[2px]'} title={'Starts on'} />
        <Text style={'text-[#1B2124]'} title={startDate} />
        <span className="border border-[#D9DCE1] h-[18px]  mx-[3px] " />
        <Text style={'mr-[2px]'} title={'Ends on'} />
        <Text style={'text-[#1B2124] '} title={endDate} />
      </div>
    </div>
  );
};

export default BatchCardInfo;
