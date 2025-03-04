import { Checkbox, cn } from '@heroui/react'
import React from 'react'

interface OptionsBoxProps {
    options: string[]
    className?: string
}

export const OptionsBox = ({ options, className }: OptionsBoxProps) => {
    const [checkSelected, setCheckSelected] = React.useState<string[]>([]); 

    const handleCheckBoxChange = (value: string) => {
        setCheckSelected((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((item) => item !== value) 
                : [...prevSelected, value]
        );
    };

    React.useEffect(() => {
        console.log("Selected:", checkSelected.length > 0 ? checkSelected : "None");
    }, [checkSelected]);

    return (
        <div className={cn("bg-white-50", className)}>
            {options.map((item) => (
                <div key={item} className='flex border-b-2 py-4 w-full px-4 gap-1'>
                    <Checkbox
                        className='text-white'
                        checked={checkSelected.includes(item)}
                        onValueChange={() => handleCheckBoxChange(item)} 
                    />
                    <div className='text-[#777777] font-medium'>{item}</div>
                </div>
            ))}
        </div>
    );
};
