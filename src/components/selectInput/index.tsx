import { cn, Select, SelectItem } from "@heroui/react";

interface selectOptionsType{
  id?:number;
  label?:string;
}
interface SelectInputProps {
  selectOptions:selectOptionsType[];
  placeholder?: string;
  className?: string;
  variant?: "flat" | "bordered" | "faded" | "underlined" | undefined;
  radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
  size?: "sm" | "md" | "lg" | undefined;
  baseClassName?:string;
  listBoxClassName?:string;
  selectedKeys?:any;
  onSelectionChange?:any;
  isDisabled?:boolean;
}

export const SelectInput = ({
  selectOptions,
  placeholder = "Select an option",
  variant="bordered",
  radius="none",
  size="lg",
  className,
  baseClassName,
  listBoxClassName,
  selectedKeys,
  onSelectionChange,
  isDisabled=false,
}: SelectInputProps) => {
  
  
  
  return (
    <Select
      className={cn("max-w-[20rem]",className)}
      isDisabled={isDisabled}
      placeholder={placeholder}
      aria-label="Question Type"
      variant={variant}
      radius={radius}
      size={size}
      selectedKeys={selectedKeys}
      onSelectionChange={onSelectionChange}
      classNames={{
        base: cn("bg-background border border-content2-1004",baseClassName),
        trigger: "border-none",
        listboxWrapper: cn("bg-background-900 rounded-[8px]",listBoxClassName),
      }}
    >
      {selectOptions.map((option) => (
        <SelectItem key={option.id}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};
