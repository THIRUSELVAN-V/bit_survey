import { Card } from '@heroui/react';
import React from 'react'


interface UserQuestionProps {
    id: number;
    question: string;
    optionQuestions: { name: string,id:number } [];
    selectedOptions:{[key:number]:number};
    onOptionSelect: (questionId:number, optionId:number) => void;
}


export const UserSurveyComp: React.FC<UserQuestionProps> = ({
    id,
    question,
    optionQuestions,
    selectedOptions,
    onOptionSelect

    }) => {
    return (
        <div>
            <div className='overflow-y-auto flex-1 scrollbar-hide mt-[1rem]'>
                <React.Fragment key={id}>
                    <div className='flex justify-center font-semibold text-lg bg-white py-5 rounded-lg mt-4'>
                        {question}
                    </div>
                    <div className='flex flex-col items-center pt-[3rem]'>
                        {optionQuestions.map((option, optionId) => {
                            return (
                                <Card className={`border border-[#C9EDFF] flex w-[50%] justify-center items-center py-3 mb-[1rem] font-medium cursor-pointer 
                      ${selectedOptions[id] === option.id ? 'bg-primary-500 text-white' : ''}`}
                                    key={optionId}
                                    isPressable
                                    onPress={() => onOptionSelect(id, option.id)}
                                >
                                    {option.name}
                                </Card>
                            )
                        })
                        }

                    </div>
                </React.Fragment>

            </div>
        </div>
    )
}
