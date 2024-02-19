import Image from '../Atoms/Image/Image';
import { BatchCardData } from '../BatchCardSection/BatchCardType';
import BatchCardHeader from './BatchcardHeader';
import BatchCardInfo from './BatchcardInfo';
import BatchPrice from './BatchPrice';
import BatchActions from './BatchActions';
import Text from '../Atoms/Text/Text';
import DetailsBatchAction from './DetailsBatchAction';
import OfflineTag from '../../../assets/Images/offlineTag.webp';
import OnlineTag from '../../../assets/Images/batch-top-online.webp';
import Placeholder from '../../../assets/Images/placeholder-batch.webp';
import cn from 'clsx';
import styles from './BatchCard.module.css';

const BatchCard = ({
  result,
  key,
  showBatchCardDetails,
  detailsCard,
  cardClassName,
}: {
  result: BatchCardData;
  key: string;
  showBatchCardDetails: boolean;
  detailsCard?: boolean;
  cardClassName?: string;
}) => {
  const endDate = new Date(result?.endDate).toLocaleDateString('en-IN', {
    year: 'numeric',
    day: 'numeric',
    month: 'short',
  });

  const startDate = new Date(result?.startDate).toLocaleDateString('en-In', {
    year: 'numeric',
    day: 'numeric',
    month: 'short',
  });
  const isOnline =
    result?.config?.isVidyapeeth === false && result?.isPathshala === false;
  return (
    <>
      <div className={cn(styles.batchCardBorder)}>
        <div
          className={`p-[1px] ${
            detailsCard
              ? ''
              : isOnline
              ? styles.batchCardWrapperOnline
              : styles.batchCardWrapperOffline
          } rounded-lg`}
        >
          <div
            style={{ boxShadow: '0px 0px 8px 0px #00000014' }}
            className={` border ${cardClassName} xl:min-w-[366px] relative rounded-lg w-[320px] p-3.5 md:p-4 bg-white`}
            key={key}
          >
            {!detailsCard && (
              <Image
                bgImagetitle={isOnline ? OnlineTag.src : `${OfflineTag.src}`}
                className={
                  'w-[100px] top-[-12px] z-10 left-[-12px] h-[35px] bg-center bg-no-repeat bg-cover absolute'
                }
              />
            )}
            <BatchCardHeader
              title={result?.name}
              whatsAppUrl={result?.seoSlug}
              showNewChip={!detailsCard && result?.markedAsNew == true}
            />

            <div className="relative">
              <Image
                placeholder={Placeholder.src}
                bgImagetitle={
                  result?.previewImage?.baseUrl + result?.previewImage?.key
                }
                className="  w-full aspect-video rounded-lg bg-center bg-cover bg-no-repeat my-[2px] mx-auto bg-gray-100"
              />
              <Text
                style={
                  'bg-white font-semibold text-xs absolute bottom-2 left-2 inline-block rounded-[4px] p-1'
                }
                title={result?.language}
              />
            </div>
            {showBatchCardDetails && (
              <div className={`${detailsCard ? 'xl:block hidden' : ''}`}>
                <BatchCardInfo
                  usedFor={result?.byName}
                  features={result?.meta}
                  startDate={startDate}
                  endDate={endDate}
                />
              </div>
            )}
            <hr className="my-[16px]" />
            {detailsCard ? (
              <>
                <div className="xl:block hidden">
                  <BatchPrice
                    originalCost={result?.fee?.amount}
                    updatedCost={result?.fee?.total}
                    discount={result?.fee?.discount}
                  />
                </div>
                <DetailsBatchAction
                  originalCost={result?.fee?.amount}
                  updatedCost={result?.fee?.total}
                  discount={result?.fee?.discount}
                  buyNowSlug={result?.slug}
                />
              </>
            ) : (
              <>
                <BatchPrice
                  originalCost={result?.fee?.amount}
                  updatedCost={result?.fee?.total}
                  discount={result?.fee?.discount}
                />
                <BatchActions
                  seoSlug={result?.seoSlug}
                  showExploreButton
                  buyNowSlug={result?.slug}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BatchCard;
