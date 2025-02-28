import React from "react";
import { ButtonComponent, Header, IconButtonComponent, Modals } from "../../components";
import { InputField } from "../../components/inputField";

export const Thiru = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className=" bg-slate-300">
        <Header
          title="Dashboard"
        />
      <div className="">
        <ButtonComponent />
        <IconButtonComponent handleOnClick={handleOpen} />
        <InputField />
        <Modals
          ModalContents={<ButtonComponent />}
          ModalFooterContent={<div>hi</div>}
          isopen={open}
          onClose={handleClose}
        />
      </div>
      
    </div>
  );
};
