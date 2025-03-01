
import { BagIcon } from "../../assets";
import { ButtonComponent } from "../button";
import { FiPlus } from "react-icons/fi";
export const NoSurveyCard = () => {
  return (
    <div className=" flex items-center flex-col">
      <div className="p-10 bg-content2-300 w-fit rounded-full mb-10">
        <BagIcon/>
      </div>
      <p className="font-medium text-xl text-content2-400 mb-5">No Surveys Yet?</p>
      <div className="flex gap-[2px] mb-10">
        <div className="w-[2px] h-[2px] rounded-full bg-success-900"></div>
        <div className="w-[2px] h-[2px] rounded-full bg-success-900"></div>
        <div className="w-[2px] h-[2px] rounded-full bg-success-900"></div>
        <div className="w-[2px] h-[2px] rounded-full bg-success-900"></div>
        <div className="w-[2px] h-[2px] rounded-full bg-success-900"></div>
        <div className="w-[2px] h-[2px] rounded-full bg-success-900"></div>
        <div className="w-[2px] h-[2px] rounded-full bg-success-900"></div>
      </div>
      <ButtonComponent
        buttonIcon={<FiPlus size={24} className="text-background " />}
        bgColor="bg-primary"
        buttonText="New Survey"
        textClassName="text-background text-base"
        baseClassName="border-none rounded-xl"
      />
    </div>
  );
};
