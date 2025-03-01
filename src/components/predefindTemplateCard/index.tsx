import React from "react"
import { ButtonComponent } from "../button";

interface PredefindTemplateCardProps{
  icon?:React.ReactNode;
  title?:string;
  description?:string;
}
export const PredefindTemplateCard = ({
  icon,
  title,
  description,
}:PredefindTemplateCardProps) => {
  return (
    <div className='bg-content2-600 p-7 rounded-[20px]'>
      <div>
      {icon}
      <p className="font-bold text-xl text-content2-700 pt-4 pb-5">{title}</p>
      <p className="font-regular text-base text-content2-700 pb-7 ">{description}</p>
      </div>
      <ButtonComponent
        buttonText="Edit"
        isIcon={false}
        bgColor="bg-primary"
        baseClassName="border-none w-fit"
        textClassName="text-background text-base"
      />
    </div>
  )
}
