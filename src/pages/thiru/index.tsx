import React from "react";
import {
  ButtonComponent,
  Chip,
  ComonPopup,
  IconButtonComponent,
  IconButtonWithText,
  Modals,
  NoGroupCreationCard,
  PredefindTemplateCard,
  SurveyCard,
} from "../../components";
import { InputField } from "../../components/inputField";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { MdOutlineSchool } from "react-icons/md";
import { FeaturedTickIcon } from "../../assets";
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
      
      <div className="p-5">
        <ComonPopup
          icon={<FeaturedTickIcon/>}
          bodyContent={<p className="font-semibold text-[19px] text-content2-100">Choose your choice</p>}
          button1Text="templates"
          button2Text="Create new"
          Button1Variant="solid"
          Button2Variant="solid"
        />
      </div>
      
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
      <div className="bg-background p-7 grid grid-cols-3 gap-14">
        <SurveyCard
          date="Nov 26, 2022"
          surveyName="Product thinking Activity"
          createdBy="Personalized Skill team"
          surveyStatus="Created"
          totalResponse={0}
          totalMembers={250}

        />
        <SurveyCard
          date="Nov 26, 2022"
          surveyName="Product thinking Activity"
          createdBy="Personalized Skill team"
          surveyStatus="Live"
          totalResponse={148}
          totalMembers={250}

        />
        <SurveyCard
          date="Nov 26, 2022"
          surveyName="Product thinking Activity"
          createdBy="Personalized Skill team"
          surveyStatus="Draft"
          totalResponse={148}
          totalMembers={250}

        />
        <SurveyCard
          date="Nov 26, 2022"
          surveyName="Product thinking Activity"
          createdBy="Personalized Skill team"
          surveyStatus="Completed"
          totalResponse={250}
          totalMembers={250}

        />
        <SurveyCard
          date="Nov 26, 2022"
          surveyName="Product thinking Activity"
          createdBy="Personalized Skill team"
          surveyStatus="Scheduled"
          totalResponse={0}
          totalMembers={250}

        />
        <SurveyCard
          date="6"
          surveyName="Product thinking Activity"
          createdBy="Personalized Skill team"
          surveyStatus="Group surveys"
          totalResponse={250}
          totalMembers={250}

        />
        <SurveyCard      
          date="6"
          surveyName="Product thinking Activity"
          createdBy="Personalized Skill team"
          surveyStatus="IncommingSurveyNotStarted"
          totalResponse={50}
          totalMembers={250}

        />
        <SurveyCard   
          date="6"
          surveyName="Product thinking Activity"
          createdBy="Personalized Skill team"
          surveyStatus="IncommingSurveyStarted"
          totalResponse={50}
          totalMembers={250}

        />
        <SurveyCard
          date="6"
          surveyName="Product thinking Activity"
          createdBy="Personalized Skill team"
          surveyStatus="IncommingSurveyCompleted"
          totalResponse={250}
          totalMembers={250}
        />
      </div>
        <div className="p-6 flex gap-4 ">
          <Chip
            label="Finish : 6 Days  ago"
            chipClass="px-3 py-4 rounded-[12px] bg-success-700"
            textClassName="text-success-400 font-medium text-[14px]"
          />
          <Chip
            label="Live: 6 Days Left"
            chipClass="px-3 py-4 rounded-[12px] bg-warning-400"
            textClassName="text-warning-500 font-medium text-[14px]"
          />
          <Chip
            label="Completed"
            chipClass="px-3 py-4 rounded-[12px] bg-transparent border border-success-600"
            textClassName="text-secondary-500 font-medium text-[14px]"
          />
        </div>
    </div>
  );
};
