import {
    Chip as NextChip,
    type ChipProps as NextChipProps,
} from '@heroui/react';


// components/Chip.tsx
import type React from 'react';

// Maps to define text colors for different chip variants
const LabelColorSourceMap = {
    primary: 'text-content1-200', // Text color for primary variant
    neutral: 'text-secondary-200', // Text color for neutral variant
    danger: 'text-danger-200', // Text color for danger variant
    success: 'text-success-200', // Text color for success variant
    warning: 'text-primary-200', // Text color for warning variant
};
// Maps to define hover styles for different chip variants
const hoverClasses = {
    primary: 'hover:bg-content1-50', // Hover background color for primary
    neutral: 'hover:bg-content2-100', // Hover background color for neutral
    danger: 'hover:bg-danger-50', // Hover background color for danger
    success: 'hover:bg-success-50', // Hover background color for success
    warning: 'hover:bg-warning-100', // Hover background color for warning
};
// Extending ChipProps from NextChip to ensure compatibility
export interface ChipProps extends Omit<NextChipProps, 'color'> {
    size?: 'sm' | 'md' | 'lg'; // Size of the chip
    label: string; // Label to display inside the chip
    isDisabled?: boolean; // Whether the chip is disabled
    isCloseable?: boolean; // Whether the chip has a close button
    avatar?: React.ReactNode; // Avatar element to display in the chip
    chipClass?: string; // Custom class for the chip
    endContent?: React.ReactNode; // Content to display at the end of the chip
    startContent?: React.ReactNode; // Content to display at the start of the chip
    chipVariant?: 'primary' | 'neutral' | 'danger' | 'success' | 'warning' | ''; // Variant type for the chip
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'full'; // Border radius of the chip
    textClassName?: string; // custom text classname
    baseClassName?: string; // custom base parent classname
    variant?:
    | 'solid'
    | 'flat'
    | 'bordered'
    | 'light'
    | 'faded'
    | 'shadow'
    | 'dot'; // Variant styling of the chip
    borderColor?: string;
}
export const Chip = ({
    label,
    avatar,
    size = 'md',
    radius = 'full',
    variant = 'bordered',
    isDisabled = false,
    isCloseable = false,
    chipClass,
    endContent,
    startContent,
    chipVariant,
    textClassName,
    baseClassName,
    borderColor,
    ...rest
}: ChipProps) => {
    //set the background color class to tra
    const backgroundColorClass = 'bg-transparent';
   
    // Determine the label color class based on the chip variant
    const labelColorClass = isDisabled
        ? 'text-content2-300' // Disabled state text color
        : LabelColorSourceMap[chipVariant as keyof typeof LabelColorSourceMap] ||
        '';

        // Define border color based on chip variant
        const borderColorClass = isDisabled
        ? 'border-content2-200' // Disabled state border color
        : `border ${borderColor || 'border-primary'}`;
    
    // Determine the hover effect class based on the chip variant
    const hoverClass = !isDisabled
        ? hoverClasses[chipVariant as keyof typeof hoverClasses]
        : '';
    return (
        <NextChip
            size={size} // Size of the chip
            avatar={avatar} // Avatar element
            radius={radius} // Border radius
            variant="bordered" // Variant typeF
            isDisabled={isDisabled} // Disabled state
            endContent={endContent} // End content element
            isCloseable={isCloseable} // Closeable state
            startContent={startContent} // Start content element
            className={`cursor-pointer ${hoverClass || ''} ${chipClass}`} // Adding hover effect and pointer cursor
            classNames={{
                base: [
                    'font-source gap-[6px] px-5 py-1',
                    backgroundColorClass, // Transparent background
                    borderColorClass, // Dynamic border color
                    baseClassName,
                ].join(' '),
                content: [
                    labelColorClass, // Text color
                    'font-source font-medium text-body3 px-0',
                    textClassName,
                ].join(' '),
            }}
            {...rest}
        >
            {label} {/* Render the label inside the chip */}
        </NextChip>
    );
};