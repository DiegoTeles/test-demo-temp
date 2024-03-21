import { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

type Option = {
  label: string;
  value: string;
};

type DropdownProps = {
  labelForAll?: string;
  filterTitle: string;
  options: Option[];
  onSelect: (value: string) => void;
  includeAllOption?: boolean;
};

function DropList({
  labelForAll = 'Todos',
  includeAllOption = true,
  filterTitle,
  options,
  onSelect,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  let allOptions = options;
  if (includeAllOption) {
    const allOption: Option = { label: labelForAll, value: 'all' };
    allOptions = [allOption, ...options];
  }

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.DropdownContainer ref={dropdownRef}>
      <S.DropdownHeader onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.label : filterTitle}
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </S.DropdownHeader>
      {isOpen && (
        <S.DropdownList>
          {allOptions.map((option, index) => (
            <S.DropdownItem key={index} onClick={() => handleSelect(option)}>
              {option.label}
            </S.DropdownItem>
          ))}
        </S.DropdownList>
      )}
    </S.DropdownContainer>
  );
}

export default DropList;
