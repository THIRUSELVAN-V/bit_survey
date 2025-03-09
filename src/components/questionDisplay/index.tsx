import React from 'react';
import { Checkbox, CheckboxGroup, Radio, RadioGroup } from '@heroui/react';
import { ButtonComponent } from '../button';
import { BiEditAlt } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdContentCopy } from 'react-icons/md';

interface QuestionDisplayProps {
    id: number;
    question: string;
    options: {option:{name:string}}[];
    questionType: 'single-choice' | 'multi-choice' | 'matrix-type';
    index: number;
    onDelete?: (questionId:number)=>void;
}

export const QuestionDisplay= ({
    id,
    question,
    options,
    questionType,
    index,
    onDelete = () => false
}:QuestionDisplayProps) => {
    const [singleSelected, setSingleSelected] = React.useState('');
    const [multiSelected, setMultiSelected] = React.useState<string[]>([]);




    return (
            <div className="bg-content2-1003 p-7 rounded-md">
                {questionType === 'single-choice' && (
                    <div className='flex flex-col gap-7'>
                        <p className="font-medium text-[18px]  text-content2-1005">
                            {index + 1}. {question}
                        </p>
                        <RadioGroup
                            isReadOnly={true}
                            value={singleSelected}
                            onValueChange={setSingleSelected}
                        >
                            <div className='flex flex-col gap-5'>
                            {options.map((option, index) => (
                                <Radio key={index} value={option.option.name} >
                                    <p className='font-medium text-[17px] text-secondary-400'>{option.option.name}</p>
                                </Radio>
                            ))}
                            </div>
                        </RadioGroup>
                    </div>
                )}
                {questionType === 'multi-choice' && (
                    <div className='flex flex-col gap-7'>
                        <p className="font-medium text-[18px]  text-content2-1005">
                        {index + 1}. {question}
                        </p>
                        <CheckboxGroup
                            color="primary"
                            isReadOnly={true}
                            value={multiSelected}
                            onValueChange={setMultiSelected}
                        >
                            <div className='flex flex-col gap-5'>
                            {options.map((option, index) => (
                                <Checkbox key={index} value={option.option.name}>
                                    <p className='font-medium text-[17px] text-secondary-400'>{option.option.name}</p>
                                </Checkbox>
                            ))}
                            </div>
                        </CheckboxGroup>
                    </div>
                )}
                <div className='gap-3 flex justify-end'>
                    <ButtonComponent
                      ButtonVariant="solid"
                      buttonText="Edit"
                      buttonIcon={<BiEditAlt size={18} color='white'/>}
                      isIcon={true}
                      bgColor="bg-primary"
                      textClassName="text-background font-medium text-[14px]"
                      baseClassName="border-none w-fit h-fit py-2 px-4 "
                    //   handleOnClick={onButtonClick}
                    />
                    <ButtonComponent
                    ButtonVariant="solid"
                    buttonText="Delete"
                    buttonIcon={<RiDeleteBin6Line  size={18} color='white'/>}
                    isIcon={true}
                    bgColor="bg-primary"
                    textClassName="text-background font-medium text-[14px]"
                    baseClassName="border-none w-fit h-fit py-2 px-4"
                    handleOnClick={()=>onDelete(id)}
                  />
                    <ButtonComponent
                    ButtonVariant="solid"
                    buttonText="Copy"
                    buttonIcon={<MdContentCopy size={18} color='white'/>}
                    isIcon={true}
                    bgColor="bg-primary"
                    textClassName="text-background font-medium text-[14px] "
                    baseClassName="border-none w-fit h-fit py-2 px-4"
                  //   handleOnClick={onButtonClick}
                  />
                </div>
            </div>
    );
};