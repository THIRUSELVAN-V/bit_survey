import { cn, Input } from "@heroui/react";


interface InputFieldProps {
	inputValue?:string;
	onValueChange?: (value: string) => void
	placeholder?:string;
	variant?:"flat" | "faded" | "bordered" | "underlined" | undefined;
	size?:"sm" | "md" | "lg" | undefined;
	radius?:"sm" | "md" | "lg" | "none" | "full" | undefined;
	baseClaseName?:string;
	isDisabled?:boolean;
	type?:string;
	endContent?:React.ReactNode;
}

export const InputField = ({
	inputValue,
	onValueChange=()=>false,
	placeholder,
	variant="bordered",
	size="lg",
	radius="none",
	baseClaseName,
	type="text",
	isDisabled=false,
	endContent

}: InputFieldProps) => {
	

	return (
		<Input 
          placeholder={placeholder} 
		  value={inputValue}
		  onValueChange={onValueChange}
          aria-label="Input"
          variant={variant}
		  isDisabled={isDisabled}
          size={size}
          radius={radius}
		  type={type}
		  endContent={endContent}
          classNames={{
            base:cn("bg-background border border-content2-1004 ",baseClaseName),
            inputWrapper:"border-none"
          }}
        />
	);
};
