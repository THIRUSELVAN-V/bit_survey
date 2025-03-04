import React from 'react'

interface PreviewQuestionsProps {
    question?:string,
    options?:string[],

}

export const PreviewQuestions = ({question,options}: PreviewQuestionsProps) => {
  return (
   <div className='bg-[#F4F5F5]'>
    
    {question &&
    <p>{question}</p>}


   </div>
  )
}
