import { option } from 'framer-motion/client'
import React from 'react'
import { RiArrowDownSFill } from 'react-icons/ri'

interface PreviewQuestionsProps {
    question?:string,
    options?:string[],
}

export const PreviewQuestions = ({question,options}: PreviewQuestionsProps) => {

  const[displayOptions,setdisplayOptions]=React.useState(true)

  const handleArrowClick = () => {
    setdisplayOptions(!displayOptions);
  }

  return (
   <div className='bg-[#F4F5F5] px-4 py-4 border rounded-md mb-3'>
    {question &&
    <p className='font-semibold'>{question}</p>}
    <div className='flex'>
      <RiArrowDownSFill size={25} className='cursor-pointer'
      onClick={handleArrowClick}/>
      <p className='text-[#007FAA]'>{displayOptions? 'Hide Answers' : 'Show Answers'}</p></div>
    {options && displayOptions &&
    <ul className=' px-2'>
      {options.map((option,index)=>
      <li  key={index}>A{index + 1}. {option}</li>)}
      </ul>}
   </div>
  )
}
