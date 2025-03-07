import { Checkbox, cn } from '@heroui/react'

interface OptionsBoxProps {
    options: {id:number,name:string}[]
    className?: string;
    onCheckBoxSelected?:(val:{id:number,name:string}[])=>void;
    selectedOptions: {id:number,name:string}[];
}

export const OptionsBox = ({ options, className,onCheckBoxSelected = ()=>false ,selectedOptions = [] }: OptionsBoxProps) => {
    
    const handleCheckBoxChange = (value: {id: number; name: string}) => {
        const isAlreadySelected = selectedOptions.some((item) => item.id === value.id);
        const updatedSelection = isAlreadySelected
            ? selectedOptions.filter((item) => item.id !== value.id)
            : [...selectedOptions, value];

        onCheckBoxSelected(updatedSelection);
    };
    

    return (
        <div className={cn("border-t border-content2-1004 ", className)}>
            {options.map((item) => (
                <div key={item.id} className='flex border-b border-content2-1004 py-4 px-9   gap-3 items-center'>
                    <Checkbox
                        size='lg'
                        radius='sm'
                        isSelected={selectedOptions.some(selected => selected.id === item.id)}
                        onValueChange={() => handleCheckBoxChange(item)} 
                        classNames={{
                            wrapper:"bg-background"
                        }}
                    />
                    <div className='text-content1-1007 font-medium'>{item.name}</div>
                </div>
            ))}
        </div>
    );
};
