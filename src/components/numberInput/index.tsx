import React from 'react';
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
    onChange?: (value: number) => void; // Expects a number
    'aria-label'?: string; // Add aria-label to the props
}

export const NumberInputComp = ({
    label = "Amount", // Default label.
    placeholder,
    variant = "bordered",
    isLabelVisible = false,
    className,
    minValue,
    maxValue,
    step,
    defaultValue,
    onChange,
    'aria-label': ariaLabel, // Destructure aria-label
}: NumberInputCompProps) => {
    const handleChange = (value: number | React.ChangeEvent<HTMLInputElement>) => {
        // Directly use the number value if it's provided
        const numericValue = typeof value === 'number' ? value : (value as React.ChangeEvent<HTMLInputElement>).target.valueAsNumber;
        console.log("NumberInputComp onChange:", numericValue); // Debugging
        onChange?.(numericValue); // Pass the number to the parent component
    };
    

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
            onChange={handleChange} // Pass the combined handler
            aria-label={ariaLabel} // Pass aria-label to NumberInput
        />
    );
};