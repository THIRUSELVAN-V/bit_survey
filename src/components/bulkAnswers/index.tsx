import React from 'react'
import { TextAreaComp } from '../textArea'
import { ButtonComponent } from '../button'
import { useQuestionStore } from '../../store/useQuestionStore'

export const BulkAnswers = ({index ,handleClose=()=>false}:{index:number; handleClose?:()=>void;}) => {

  const {currentQuestions,setCurrentQuestionField} =useQuestionStore()
  // console.log("burr:",currentQuestions[index]);
  

  const [bulkAnswersText, setBulkAnswersText] = React.useState('')
  const [answersArray, setAnswersArray] = React.useState<string[]>([])

  const handleChange = (value: string) => {
    setBulkAnswersText(value)
  }

  const handleSave = () => {

    const newAnswersArray = bulkAnswersText.split('\n').filter((line) => line.trim() !== '');

  // Get the existing options array
  const existingOptions = currentQuestions[index].options;

  // Check if all existing options are empty
  const allOptionsEmpty = existingOptions.every(opt => opt.option.trim() === "");

  let updatedOptions;
  if (allOptionsEmpty) {
    // Replace with new answers
    updatedOptions = newAnswersArray.map((option, i) => ({
      id: i + 1, // Reset IDs
      option,
    }));
  } else {
    // Append new answers to existing options
    updatedOptions = [
      ...existingOptions,
      ...newAnswersArray.map((option, i) => ({
        id: existingOptions.length + i + 1, // Unique ID
        option,
      })),
    ];
  }

  // Update the state with the new options array
  setCurrentQuestionField(index, "options", updatedOptions);

  // console.log('Updated options:', updatedOptions);
    
  }

  return (
    <div className='rounded-md'>
      <h2 className='text-3xl px-5 pt-8 pb-5 text-secondary-500 font-semibold'>
        Add answers in bulk
      </h2>
      <div className='bg-content2-1006 px-9 py-5'>
        <p className='text-base text-content2-800 font-bold mb-2'>
          Enter each answer choice on a separate line
        </p>
        <TextAreaComp
          className='h-[15rem] px-4 py-3 border-2'
          value={bulkAnswersText}
          onChange={handleChange}
          placeholder='Benefits
Advancement opportunities
Co-workers
Job security'
        />
      </div>
      <div className='flex justify-end px-5 py-4 gap-4'>
        <ButtonComponent
          isIcon={false}
          buttonText='Cancel'
          textClassName='text-secondary-500 text-[17px]'
          baseClassName='border-content2-1004'
          handleOnClick={handleClose}
        />
        <ButtonComponent
          isIcon={false}
          buttonText='Save'
          bgColor='bg-primary'
          textClassName='text-background text-base text-[17px]'
          baseClassName='border-none'
          handleOnClick={()=>{handleSave(); handleClose()}}
        />
      </div>

    </div>
  )
}
