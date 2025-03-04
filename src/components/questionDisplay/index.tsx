import React from 'react';
import { Checkbox, CheckboxGroup, Radio, RadioGroup } from '@heroui/react';
import { ButtonComponent } from '../button';
import { BiEditAlt } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdContentCopy } from 'react-icons/md';

interface QuestionDisplayProps {
    id: number;
    question: string;
    options: string[];
    questionType: 'single-choice' | 'multi-choice' | 'matrix-type';
    index: number
}

export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
    question,
    options,
    questionType,
    index
}) => {
    const [singleSelected, setSingleSelected] = React.useState('');
    const [multiSelected, setMultiSelected] = React.useState<string[]>([]);




    return (
        <div className="bg-background min-h-full rounded-md p-4 flex flex-col">
            <div className="bg-[#F4F5F5] p-4 rounded-md">
                {questionType === 'single-choice' && (
                    <div>
                        <p className="font-semibold text-[0.875rem] py-3 text-content2-100">
                            {index + 1}. {question}
                        </p>
                        <RadioGroup
                            isReadOnly={true}
                            value={singleSelected}
                            onValueChange={setSingleSelected}
                        >
                            {options.map((option, index) => (
                                <Radio key={index} value={option}>
                                    {option}
                                </Radio>
                            ))}
                        </RadioGroup>
                    </div>
                )}
                {questionType === 'multi-choice' && (
                    <div>
                        <p className="font-semibold text-[0.875rem] py-3 text-content2-100">
                        {index + 1}. {question}
                        </p>
                        <CheckboxGroup
                            color="primary"
                            isReadOnly={true}
                            value={multiSelected}
                            onValueChange={setMultiSelected}
                        >
                            {options.map((option, index) => (
                                <Checkbox key={index} value={option}>
                                    {option}
                                </Checkbox>
                            ))}
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
                      textClassName="text-background font-regular text-[14px]"
                      baseClassName="border-none w-fit h-fit py-1"
                    //   handleOnClick={onButtonClick}
                    />
                    <ButtonComponent
                    ButtonVariant="solid"
                    buttonText="Delete"
                    buttonIcon={<RiDeleteBin6Line  size={18} color='white'/>}
                    isIcon={true}
                    bgColor="bg-primary"
                    textClassName="text-background font-regular text-[14px]"
                    baseClassName="border-none w-fit h-fit py-1"
                  //   handleOnClick={onButtonClick}
                  />
                    <ButtonComponent
                    ButtonVariant="solid"
                    buttonText="Copy"
                    buttonIcon={<MdContentCopy size={18} color='white'/>}
                    isIcon={true}
                    bgColor="bg-primary"
                    textClassName="text-background font-regular text-[14px] "
                    baseClassName="border-none w-fit h-fit py-1"
                  //   handleOnClick={onButtonClick}
                  />
                </div>
            </div>
        </div>
    );
};