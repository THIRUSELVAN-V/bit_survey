import React from 'react'
import { Card, Progress } from '@heroui/react'
import { UserSurveyData } from './utiles'

type UserSurveyProps = {
  [key : number] : number;
}


export const UserSurvey = () => {

 const [selectedOptions, setSelectedOptions] = React.useState<UserSurveyProps>({});

 const handleSelectionOption = (questionId : number, OptionId : number) => {
  setSelectedOptions((prev) => {
    const updateState ={ ...prev,
    [questionId]: OptionId}
    console.log(updateState);
    return updateState;
  });
 }
  return (
    <div className='w-[70%] mx-auto h-screen flex flex-col'>
      <div className='fixed w-[56%] top-26 left-45 mx-auto z-10 bg-[#f5f7fa]'>
        <div className='flex justify-center font-semibold text-lg py-3 '>Survey Title</div>
        <div className='flex flex-row gap-2 pb-7 px-6 '>
          {UserSurveyData().map((data) => {
            return (
              <Progress
                key={data.id}
                aria-label='progress bar'
                value={selectedOptions[data.id] !== undefined ? 100 : 0}
                size='sm' />
            )
          })}
        </div>
      </div>
      <div className='overflow-y-auto flex-1 scrollbar-hide mt-[4rem]'>
        {UserSurveyData().map((data) => (
          <React.Fragment key={data.id}>
            <div className='flex justify-center font-semibold text-lg bg-white py-5 rounded-lg mt-4'>
              {data.question}
            </div>
            <div className='flex flex-col items-center pt-[3rem]'>
              {data.options.map((option, optionId) => {
                return (
                  <Card className={`border border-[#C9EDFF] flex w-[50%] justify-center items-center py-3 mb-[1rem] font-medium cursor-pointer 
                      ${selectedOptions[data.id] === optionId ?'bg-primary-500 text-white': ''}`}
                    key={optionId}
                    isPressable
                    onPress={() => handleSelectionOption(data.id,optionId)}
                  >
                    {option}
                  </Card>
                )
              })
              }

            </div>
          </React.Fragment>
        )
        )}
      </div>
    </div>
  )
}
