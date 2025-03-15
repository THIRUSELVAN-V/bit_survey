import React from 'react'
import { IconButtonComponent } from '../iconButton'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { Divider } from '@heroui/react'
import { InputField } from '../inputField'
import { SelectInput } from '../selectInput'
import { ButtonComponent } from '../button'

interface ShareModelProps {
  onCloseModel: () => void;
}

export const ShareModel = ({
  onCloseModel = () => false,
}: ShareModelProps) => {

  const [email, setEmail] = React.useState('')
  const handleShareClick = () => {
  console.log('email:', email);
  }

  const options = [
    { label: 'Can Edit', value: 'canEdit' },
    { label: 'Can View', value: 'canView' },
  ]

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl text-content2-400">Share with collabrators</h2>
        <IconButtonComponent
          border="none"
          buttonIcon={<IoMdCloseCircleOutline size={25} className="text-red-500" />}
          btnClassName="p-3 rounded-full bg-transparent"
          handleOnClick={onCloseModel}
        />
      </div>
      <Divider className="" />

      <div className="items-center py-3">
        <div className='font-semibold text-content2-400 text-md pb-2'>
          Email id
        </div>
        <InputField
          type='email'
          placeholder="Enter email id"
          baseClaseName='w-full rounded-md'
          variant='bordered'
          size='md'
          radius='md'
          onValueChange={(value) => setEmail(value)}
          endContent={
            <SelectInput
              selectOptions={options}
              placeholder="Can Edit"
              variant="bordered"
              radius="none"
              size='sm'
              baseClassName='w-[8rem] rounded-md h-[1.8rem] justify-center ' 
              listBoxClassName='w-[7rem] bg-white border border-content2-1004 rounded-md'  
        />}
        />
      </div>
      <div className='flex justify-end items-end py-3 gap-4'>
        <ButtonComponent
        bgColor='bg-white'
        isIcon={false}
         buttonText='Cancel'
         ButtonVariant='bordered'
         baseClassName='border border-[#FC7A85]'
         textClassName='text-[#FB3748] text-lg font-medium'
         handleOnClick={onCloseModel}/> 
         <ButtonComponent
         bgColor='bg-primary-500'
        isIcon={false}
         buttonText='Share'
         ButtonVariant='bordered'
         baseClassName='border border-primary-500'
         textClassName='text-[#FFFFFF] text-lg font-medium'
         handleOnClick={handleShareClick}/> 
      </div>
    </div>
  )
}
