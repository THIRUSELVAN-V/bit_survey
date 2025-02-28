import { NumberInput } from "@heroui/react";


interface NumberInputCompProps {
    label?: string;
    placeholder?: string;
    variant?: 'bordered';
    isLabelVisible?: boolean;
    className?: string;
    minValue?: number;
    maxValue?: number;
    step?: number; // Step value for increment/decrement
    defaultValue?: number;
    onChange?: (value: number) => void;
}

export const NumberInputComp = ({
    label = "Amount", // Default label.
    placeholder,
    variant = "bordered",
    isLabelVisible = true,
    className,
    minValue,
    maxValue,
    step,
    defaultValue,
    onChange,
}: NumberInputCompProps) => {
    return (
        <NumberInput

            label={isLabelVisible ? label : undefined} // Conditionally render the label.
            placeholder={placeholder}
            variant={variant}
            className={className}
            minValue={minValue}
            maxValue={maxValue}
            step={step}
            defaultValue={defaultValue}
            onChange={(value) => onChange?.(value)} // Handle value changes.
        />
    );
};
