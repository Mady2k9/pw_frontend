import React, { useState, useEffect, useRef } from 'react';

interface Option {
  id: number;
  label: string;
}

interface MultiSelectDropdownProps {
  options: Option[];
  selectedOptions: number[];
  setSelectedOptions: (selected: number[]) => void;
  label: string;
  placeholder?: string;
  buttonClassName?: string;
  dropdownClassName?: string;
  checkboxClassName?: string;
  allowSelectAll?: boolean;
  closeOnSelect?: boolean;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  options,
  selectedOptions,
  setSelectedOptions,
  label,
  placeholder = 'Select Options',
  buttonClassName = '',
  dropdownClassName = '',
  checkboxClassName = '',
  allowSelectAll = false,
  closeOnSelect = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleDropdownToggle = (event: React.MouseEvent) => {
    event.stopPropagation(); // Stop the event propagation
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    const isSelected = selectedOptions.includes(optionId);
    let updatedSelection: number[] = [];

    if (isSelected) {
      updatedSelection = selectedOptions.filter((id) => id !== optionId);
    } else {
      updatedSelection = [...selectedOptions, optionId];
    }

    setSelectedOptions(updatedSelection);

    if (!closeOnSelect) {
      return;
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedOptions([]);
    } else {
      const allOptionIds = options.map((option) => option.id);
      setSelectedOptions(allOptionIds);
    }
    setSelectAll(!selectAll);
  };

  return (
    <div className="relative">
      <div
        data-testid="dropdown-button"
        className={`bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300 ${buttonClassName}`}
        onClick={handleDropdownToggle}
      >
        {selectedOptions.length === 0
          ? placeholder
          : `${label} (${selectedOptions.length})`}
      </div>
      {isOpen && (
        <div
          className={`absolute mt-2 bg-white border border-black rounded-lg shadow-md ${dropdownClassName}`}
          ref={dropdownRef}
          style={{ position: 'absolute', zIndex: 9999 }}
        >
          <div className="px-4 py-2 border-b border-gray-300">
            {allowSelectAll && (
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
                <span className="ml-2 text-gray-700">Select All</span>
              </label>
            )}
          </div>
          <div className="space-y-2">
            {options.map((option) => (
              <label
                key={option.id}
                className={`flex items-center cursor-pointer ${checkboxClassName}`}
                onClick={(event) => handleOptionClick(option.id, event)}
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600"
                  checked={selectedOptions.includes(option.id)}
                />
                <span className="ml-2 text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
