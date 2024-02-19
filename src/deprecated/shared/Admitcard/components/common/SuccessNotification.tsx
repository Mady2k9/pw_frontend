import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';
import { InformationCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';
import cn from 'clsx';
import { NotificationEnums } from './useNotify';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import Loader from './Loader';
import Button from '@/deprecated/shared/Components/Atoms/Button/Button';
// Sample code for notification
// <Button onClick={() => {
//     showNotification({
//         description: "Description  " + new Date().getTime(),
//         type: NotificationEnums.ERROR,
//         title: "New Title",
//         onClose: () => {
//             console.log('closed');
//         },
//         content: <div className={'bg-pink-600'}>
//             Error
//         </div>
//     })
// }}>
//     Hllo
// </Button>
export default function SuccessNotification({
  index,
  type,
  totalCount,
  content,
  title,
  description,
  onClose,
}: {
  index: number;
  totalCount: number;
  title?: string;
  content?: any;
  description?: string;
  type: NotificationEnums;
  onClose: () => void;
}) {
  const [show, setShow] = useState(true);

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className={cn(
          'pointer-events-none fixed flex px-6 py-6 z-[99999] sm:items-start sm:p-6 inset-0 top-16'
        )}
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className={cn(
                'pointer-events-auto  w-full transition-all duration-300 animate-notificationZoom animated max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 border border-gray-200',
                {
                  ['  ']: index === totalCount - 1,
                }
              )}
              style={{
                transform: `translateY(${
                  (totalCount - index - 1) * 5
                }px) scale(${(100 - (totalCount - index - 1) * 4) / 100})`,
              }}
            >
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {type === NotificationEnums.LOADING && <Loader scale={1} />}
                    {type === NotificationEnums.SUCCESS && (
                      <CheckCircleIcon
                        className="h-6 w-6 text-green-400"
                        aria-hidden="true"
                      />
                    )}
                    {type === NotificationEnums.ERROR && (
                      <ExclamationCircleIcon
                        className="h-6 w-6 text-red-400"
                        aria-hidden="true"
                      />
                    )}
                    {type === NotificationEnums.WARNING && (
                      <ExclamationCircleIcon
                        className="h-6 w-6 text-yellow-600"
                        aria-hidden="true"
                      />
                    )}
                    {type === NotificationEnums.INFO && (
                      <InformationCircleIcon
                        className="h-6 w-6 text-blue-400"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    {title && (
                      <p className="text-sm font-medium text-gray-900">
                        {title}
                      </p>
                    )}
                    {description && (
                      <p className="mt-1 text-sm text-gray-500">
                        {description}
                      </p>
                    )}
                    {content || <></>}
                  </div>

                  <div className="ml-4 flex flex-shrink-0">
                    <button onClick={onClose}>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
