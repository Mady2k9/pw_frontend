import React, { useState } from 'react';

function FilterTabBox({
  showBox,
  setShowBox,
}: {
  showBox: any;
  setShowBox: (arg2: {
    filterbox: [];
    selectedSubFilter: [];
    status: boolean;
  }) => void;
}) {
  const [selectedSubFilter, setSelectedSubFilter] = useState(
    showBox.selectedSubFilter
  );
  const handleApplyFilter = () => {
    setShowBox({
      filterbox: showBox.filterbox,
      selectedSubFilter: selectedSubFilter,
      status: false,
    });
  };
  const handleCheckboxChange = (data: string) => {
    const updatedFilterbox = selectedSubFilter.includes(data)
      ? selectedSubFilter.filter((item: string) => item !== data)
      : [...selectedSubFilter, data];
    setSelectedSubFilter(updatedFilterbox);
  };
  return (
    <div
      style={{ boxShadow: '0px 12px 36px 0px #0000001A' }}
      className="absolute top-[60px] w-[160px] left-0 right-0 sm:left-auto sm:right-auto mx-auto sm:w-[240px] rounded-lg flex flex-col gap-y-2 bg-white min-h-[140px] py-3 z-20"
    >
      {showBox?.filterbox?.map((data: string) => (
        <>
          <div className="px-3 py-1 gap-2 flex items-center">
            <input
              className="h-4 w-4 border-[#D9DCE1] rounded-sm cursor-pointer"
              type="checkbox"
              id={data}
              name={data}
              value={data}
              checked={selectedSubFilter.includes(data)}
              onChange={() => handleCheckboxChange(data)}
            />
            <label className="text-base text-[#3D3D3D]" htmlFor={data}>
              {data}
            </label>
            <br />
          </div>
        </>
      ))}
      <div className="flex justify-end px-3">
        <button
          onClick={handleApplyFilter}
          className="bg-[#5A4BDA] px-3 py-1.5 max-w-[62px] rounded-md text-white"
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default FilterTabBox;
