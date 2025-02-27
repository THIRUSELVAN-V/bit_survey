import { Select, SelectItem } from "@heroui/react";
import { IoMdArrowDropdown } from "react-icons/io"; 

interface SelectInputProps {
  options: { key: string; label: string }[];
  placeholder?: string;
  className?: string;
  onSelectionChange?: (key: string) => void;
}

export const SelectInput = ({
  options,
  placeholder = "Select an option",
  className,
  onSelectionChange,
}: SelectInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedKey = event.target.value;
    onSelectionChange?.(selectedKey);
  };

  return (
    <div>
    <Select
    classNames={{
        base: "rounded-none", 
        trigger: "rounded-none", 
      }}
      placeholder={placeholder}
      variant="bordered"
      onChange={handleChange}
      className={className} 
    >
      {options?.map((option) => (
        <SelectItem key={option.key} value={option.key}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  </div>
  );
};