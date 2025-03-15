import React, { useEffect } from 'react'
import { Card, Progress } from '@heroui/react'
import { UserSurveyData } from './utiles'
import { UserSurveyComp } from '../userSuveryComp.tsx';
import { useUserSurvey } from '../../store/useUserSurvey.tsx';

type UserSurveyProps = {
  [key: number]: number;
}


export const UserSurvey = () => {
  const {questions,fetchAllQuestions} = useUserSurvey();
console.log(questions);
useEffect(()=>{
  fetchAllQuestions()
},[])

  const [selectedOptions, setSelectedOptions] = React.useState<UserSurveyProps>({});

  const handleSelectionOption = (questionId: number, OptionId: number) => {
    setSelectedOptions((prev) => {
      const updateState = {
        ...prev,
        [questionId]: OptionId
      }
      return updateState;
    });
  }
  return (
    <div className='w-[70%] mx-auto h-screen flex flex-col'>
      <div className=' bg-[#f5f7fa]'>
        <div className='flex justify-center font-semibold text-lg py-3 '>Survey Title</div>
        <div className='flex flex-row gap-2 pb-3 px-6 '>
          {questions.map((data) => (
            <Progress
              key={data.id}
              aria-label='progress bar'
              value={selectedOptions[data.id] !== undefined ? 100 : 0}
              size='sm' />

          ))}
        </div>
        <div className='flex flex-row justify-center font-semibold text-lg'>
          {Object.keys(selectedOptions).length} / {questions.length}
        </div>
      </div>
      {questions.map((data) => (
        <UserSurveyComp
        id={data.id}
          key={data.id}
          question={data.question}
          optionQuestions={data.optionsQuestions.map((option :any) => (
            {
                 name: option.option.name ,id:option.option.id 
            }
          ))}
          onOptionSelect={handleSelectionOption}
          selectedOptions={selectedOptions}
        />
      ))}
    </div>
  )
}
