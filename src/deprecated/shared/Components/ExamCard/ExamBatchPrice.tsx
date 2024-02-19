import Text from '../Atoms/Text/Text';

const ExamBatchPrice = ({
  originalCost,
  updatedCost,
  discount,
}: {
  originalCost: string;
  updatedCost: string;
  discount: string;
}) => {
  return (
    <div className="flex flex-row w-full items-center">
      <Text
        style={'font-bold text-base text-blue-700'}
        title={'₹' + updatedCost}
      />
      <Text
        style={'font-bold text-base line-through  ml-2'}
        title={originalCost}
      />
      <Text
        style={' text-emerald-700 font-bold text-base ml-3 text-center'}
        title={discount + '% off'}
      />
    </div>
  );
};

export default ExamBatchPrice;
