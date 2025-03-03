import React from "react";
import { Chip } from "../chip"; // Adjust the import path as needed
import { ButtonComponent } from "../button"; // Adjust the import path as needed
import { Avatar, AvatarGroup, Progress } from "@heroui/react"; // Assuming Heroui provides an Avatar component
import { BsThreeDotsVertical } from "react-icons/bs"; // Import the three-dot icon
import { HiOutlinePlusSm } from "react-icons/hi";

interface SurveyCardProps {
  date?: string;
  surveyName?: string;
  createdBy?: string;
  surveyStatus?:
    | "Created"
    | "Draft"
    | "Scheduled"
    | "Live"
    | "Completed"
    | "Group surveys"
    | "IncommingSurveyNotStarted"
    | "IncommingSurveyStarted"
    | "IncommingSurveyCompleted"
    | "MentoringLiveCard"
    | "MentoringCompletedCard";
  totalResponse?: number;
  totalMembers?: number;
}

export const SurveyCard: React.FC<SurveyCardProps> = ({
  date,
  surveyName,
  createdBy,
  surveyStatus = "Created",
  totalResponse = 0,
  totalMembers,
}) => {
  return (
    <div className="p-[0.875rem] rounded-xl  bg-secondary-200 flex flex-col  gap-3">
      {/* Header Section with Chip/Title and Three-Dot Icon */}
      <div className="flex justify-between items-center">
        {surveyStatus === "Group surveys" ? (
          <Chip
            label={`Finish : ${date} Days  ago`}
            chipClass="px-3 py-4 rounded-[12px] bg-success-700"
            textClassName="text-success-400 font-medium text-[14px]"
          />
        ) : surveyStatus === "IncommingSurveyStarted" || surveyStatus === "IncommingSurveyNotStarted" || surveyStatus === "MentoringLiveCard" ? (
          <Chip
            label={`Live: ${date} Days Left`}
            chipClass="px-3 py-4 rounded-[12px] bg-warning-400"
            textClassName="text-warning-500 font-medium text-[14px]"
          />
        ) : (surveyStatus === "IncommingSurveyCompleted" || surveyStatus==="MentoringCompletedCard") ? (
          <Chip
            label="Completed"
            chipClass="px-3 py-4 rounded-[12px] bg-transparent border border-success-600"
            textClassName="text-secondary-500 font-medium text-[14px]"
          />
        ) : (
          <p className="text-base font-medium text-secondary-600">{date}</p>
        )}

        {/* Three-Dot Icon (always rendered at the right end) */}
        <BsThreeDotsVertical
          size={18}
          className=" text-content2-800 cursor-pointer"
        />
      </div>

      {/* Subtitle and Description */}

      <p className="text-sm text-content1-1001 font-medium">{surveyName}</p>
      <p className="text-base text-content1-1001 ">{createdBy}</p>

      {/* Progress Bar */}
      {(surveyStatus !== "Scheduled" && surveyStatus!=="IncommingSurveyCompleted" && surveyStatus!=="MentoringCompletedCard") && (
        <div className="">
          <Progress
            className="max-w-md"
            maxValue={totalMembers}
            value={totalResponse}
            aria-label="Progress"
            classNames={{
              indicator: `${
                surveyStatus === "Draft"
                  ? "bg-content1-1002"
                  :( surveyStatus === "Live" || surveyStatus === "IncommingSurveyNotStarted" || surveyStatus === "IncommingSurveyStarted" || surveyStatus === "MentoringLiveCard")
                  ? "bg-warning"
                  : surveyStatus === "Completed" ||
                    surveyStatus === "Group surveys"
                  ? "bg-success-foreground"
                  : ""
              }`,
              base: `${
                surveyStatus === "Completed" || surveyStatus === "Group surveys"
                  ? "border-[0.5px] rounded-full border-success-100"
                  : ""
              }`,
            }}
          />
          <div className="flex font-regular text-sm text-content1-1001 justify-between max-w-md">
            <p>Progress</p>
            <p>
              {totalMembers
                ? Number(((totalResponse / totalMembers) * 100).toFixed(2))
                : "undefinde"}
              %
            </p>
          </div>
        </div>
      )}
      <div className={`flex ${(surveyStatus === "Live" || surveyStatus === "IncommingSurveyNotStarted" || surveyStatus === "IncommingSurveyStarted" || surveyStatus==="Group surveys" || surveyStatus === "MentoringLiveCard")?"justify-between":"justify-end"} items-center `}>
        {(surveyStatus === "Live" || surveyStatus === "IncommingSurveyNotStarted" || surveyStatus === "IncommingSurveyStarted" ||surveyStatus==="Group surveys" || surveyStatus === "MentoringLiveCard") && (
          <div className=" ">
            <AvatarGroup
              size="sm"
              max={2}
              renderCount={(count) => (
                <div className="flex cursor-pointer items-center gap-[0.438rem]">
                  <div className="w-8 h-8 ml-[0.313rem] flex items-center justify-center bg-warning rounded-full">
                    <HiOutlinePlusSm size={25} className="text-background" />
                  </div>
                  <p className="text-warning-800 text-xs font-medium ">
                    {count >= 100 ? "99+" : count} responses
                  </p>
                </div>
              )}
              total={totalResponse}
            >
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            </AvatarGroup>
          </div>
        )}
        {(surveyStatus === "Created" || surveyStatus === "IncommingSurveyNotStarted" || surveyStatus === "IncommingSurveyStarted" || surveyStatus === "IncommingSurveyCompleted" || surveyStatus === "Draft" || surveyStatus==="MentoringCompletedCard") && (
          <ButtonComponent
            isIcon={false}
            ButtonVariant="solid"
            buttonText={surveyStatus==="IncommingSurveyStarted"?"Resume":(surveyStatus==="IncommingSurveyCompleted" || surveyStatus==="MentoringCompletedCard")?"View":"Start"}
            bgColor={surveyStatus==="IncommingSurveyStarted"?"bg-warning-700":"bg-success"}
            baseClassName="w-fit px-7 rounded-[4px] py-2 h-fit border-none "
            textClassName="font-bold text-[14px] text-background"
          />
        )}
        {(surveyStatus === "MentoringLiveCard") && (
          <ButtonComponent
            isIcon={false}
            ButtonVariant="bordered"
            buttonText="View"
            bgColor="bg-transparent"
            baseClassName="w-fit px-7 rounded-[7px] py-2 h-fit border-content1-1005 "
            textClassName="font-bold text-[14px] text-content1-1004"
          />
        )}
        {surveyStatus === "Group surveys" && (
          <ButtonComponent
            isIcon={false}
            buttonText="Complete"
            ButtonVariant="bordered"
            bgColor="bg-transparent"
            baseClassName="w-fit px-3 rounded-[4px] py-2 h-fit border-success "
            textClassName="font-bold text-[14px] text-secondary-500"
          />
        )}
        {surveyStatus === "Live" && (
          <Chip
            label="In Live"
            textClassName="font-bold text-[14px] text-secondary-500 "
            baseClassName="bg-transparent border border-warning-800 px-6 py-3"
          />
        )}
        {surveyStatus === "Completed" && (
          <Chip
            label="Completed"
            textClassName="font-medium text-[12px] text-secondary-500 "
            baseClassName="bg-transparent border border-success px-5 py-3"
          />
        )}
        {surveyStatus === "Scheduled" && (
          <Chip
            label="Scheduled"
            textClassName="font-medium text-[12px] text-secondary-500 "
            baseClassName="bg-transparent border border-warning-900 px-5 py-3"
          />
        )}
      </div>
    </div>
  );
};
