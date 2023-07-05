import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

import Arrow from '@/components/icons/Arrow/Arrow';

interface ISelectProps {
  options: string[];
  onChange?: (option: string) => void;
  value?: string;
}

const Select: React.FC<ISelectProps> = ({ options, onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleToggle = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  const handleSelectChange = (option: string): void => {
    onChange?.(option);

    setIsOpen(false);
  };

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
        {value}

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
              key={option}
              className="text-black cursor-pointer h-10 flex items-center hover:bg-gray-200 w-full"
              onClick={(): void => handleSelectChange(option)}
            >
              <span className="ml-3 block font-normal truncate">{option}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
