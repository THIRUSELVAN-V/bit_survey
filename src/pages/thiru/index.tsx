import React from "react";
import {
  ButtonComponent,
  Header,
  IconButtonComponent,
  IconButtonWithText,
  Modals,
  NoGroupCreationCard,
  NoSurveyCard,
} from "../../components";
import { InputField } from "../../components/inputField";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { BagIcon } from "../../assets";
export const Thiru = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className=" ">
      <Header title="Dashboard" />
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
        <div className="p-6 flex gap-3">
          <IconButtonWithText
            icon={
              <MdOutlineWorkOutline size={27} className="text-content1-400" />
            }
            text="Skills"
            color="text-content1-400"
          />
          <IconButtonWithText
            icon={<BsPerson size={27} className="text-warning-200" />}
            text="Skills"
            color="text-warning-200"
            baseClass="border-warning-100"
          />
          <IconButtonWithText
            icon={<BsPerson size={27} className="text-content1-500" />}
            text="Skills"
            color="text-content1-500"
          />
        </div>
      </div>
      <div className="">
        <NoGroupCreationCard />
      </div>
      <div className="p-8">
        <NoSurveyCard />
      </div>
    </div>
  );
};
