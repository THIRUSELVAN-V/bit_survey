import React from "react"
import { ButtonComponent, IconButtonComponent, Modals } from "../../components"
import { InputField } from "../../components/inputField"



export const Thiru = () => {
     const [open,setOpen] = React.useState(false)
    const handleOpen = () =>{
        setOpen(true)
    }
    const handleClose = () =>{
        setOpen(false)
    }
  return (
    <div className='text-success-800 text-xl'>
        <ButtonComponent/>
        <IconButtonComponent handleOnClick={handleOpen}/>
        <InputField/>
        <Modals
            ModalContents = {<ButtonComponent/>}
            ModalFooterContent = {<div>hi</div>}
            isopen = {open}
            onClose={handleClose}
        />
    </div>
  )
}

