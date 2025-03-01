import React from "react";
import {
  ButtonComponent,
  IconButtonComponent,
  IconButtonWithText,
  Modals,
  NoGroupCreationCard,
  PredefindTemplateCard,
} from "../../components";
import { InputField } from "../../components/inputField";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { MdOutlineSchool } from "react-icons/md";
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
      <div className="p-3 bg-white flex gap-10">
        <PredefindTemplateCard
          icon={<MdOutlineSchool size={24} className="text-content1-900"/>}
          title="Assets"
          description="This template allows users to create structured product-related survey questions efficiently. It includes predefined question formats"
        />
        <PredefindTemplateCard
          icon={<MdOutlineSchool size={24} className="text-content1-900"/>}
          title="Assets"
          description="This template allows users to create structured product-related survey questions efficiently. It includes predefined question formats"
        />
        <PredefindTemplateCard
          icon={<MdOutlineSchool size={24} className="text-content1-900"/>}
          title="Assets"
          description="This template allows users to create structured product-related survey questions efficiently. It includes predefined question formats"
        />
      </div>
    </div>
  );
};
