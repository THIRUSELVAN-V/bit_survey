import React from 'react'
import { TextAreaComp } from '../textArea'
import { ButtonComponent } from '../button'

export const BulkAnswers = () => {

const [bulkAnswersText, setBulkAnswersText] = React.useState('')
const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBulkAnswersText(e.target.value)
  }

  return (
    <div className=''>
        <h2 className='text-2xl px-5 py-3 text-[#5A5A5A] font-semibold'>Add answers in bulk</h2>
        <div className='bg-[#F3F3F3] px-5 py-3'>
            <p className='text-md text-[#5A5A5A] font-bold mb-2'>Enter each answer choice on a seperate line</p>
            <TextAreaComp 
            className='h-[24.99rem] px-4 py-3 border-2' 

            placeholder='Benefits
Advancement opportunities
Co-workers
Job security'/>
        </div>
        <div className='flex justify-end px-5 py-3 gap-4'>
            <ButtonComponent
            isIcon={false}
            buttonText='Cancel'
            textClassName='text-[#777777] text-[17px]'
            baseClassName='border-[#D0D2D3]'/>
            <ButtonComponent
            isIcon={false}
            buttonText='Save'
            bgColor="bg-primary"
             textClassName="text-background text-base text-[17px]"
             baseClassName='border-none'
             handleOnClick={handleChange}
            />
        </div>
    </div>
  )
}
