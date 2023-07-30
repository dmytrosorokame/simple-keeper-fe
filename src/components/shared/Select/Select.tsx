import cn from 'classnames';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import Arrow from '@/components/icons/Arrow';
import { ISelectOption } from '@/types/common';

interface ISelectProps {
  options: ISelectOption[];
  selectedOption?: ISelectOption | null;
  onChange?: (option: ISelectOption) => void;
}

const Select: React.FC<ISelectProps> = ({ options, onChange, selectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleToggle = useCallback((): void => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const handleChange = useCallback(
    (option: ISelectOption): void => {
      onChange?.(option);

      setIsOpen(false);
    },
    [onChange],
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const isClickOutside = ref.current && !ref.current.contains(event.target as Node);

      if (isClickOutside) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return (): void => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className="w-full border-2 border-black h-10 flex items-center pl-3 relative"
        onClick={handleToggle}
      >
        {selectedOption?.label || 'Select'}

        <Arrow className={cn('absolute right-3 top-1/2 -translate-y-1/2', { ['rotate-180']: isOpen })} />
      </button>

      {isOpen && (
        <div
          tabIndex={-1}
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-item-3"
          className="absolute w-full bg-white border-black border-2 border-t-0 z-10"
        >
          {options.map((option) => (
            <button
              key={option.value}
              className="text-black cursor-pointer h-10 flex items-center hover:bg-gray-200 w-full"
              onClick={(): void => handleChange(option)}
            >
              <span className="ml-3 block font-normal truncate">{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
