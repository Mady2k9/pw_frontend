import React from 'react';
import ExclamationTriangleIcon from '@heroicons/react/24/solid/ExclamationTriangleIcon';

const ShowError = ({ field, error }: { field: string; error: any }) => {
  return (
    <div className="mt-2 flex items-center">
      <ExclamationTriangleIcon
        className={'h-[15px] w-[15px] text-red-500 mr-1'}
      />
      <p className="font-medium text-sm">
        <span className="text-red-500">{error[field]}</span>
      </p>
    </div>
  );
};

export default ShowError;
