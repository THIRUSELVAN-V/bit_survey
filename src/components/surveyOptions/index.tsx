import { cn } from "@heroui/react";
import React from "react";

interface SurveyOptionProps {
  iconBgColor: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void; // Optional onChange prop
}

export const SurveyOption = ({
  iconBgColor,
  icon,
  title,
  description,
  onClick = () => false,
}: SurveyOptionProps) => {
  return (
    <div onClick={onClick} className=" border-primary-800 border rounded-[10px] flex items-center gap-4 py-2 px-5">
      {/* Icon Container */}
      <div
        className={cn(
          "p-[1.25rem] rounded-full flex items-center justify-center",
          iconBgColor
        )}
      >
        {icon}
      </div>
      {/* Text Content */}
      <div className="flex flex-col gap-1">
        <h3 className="font-regular text-[16px] text-content2-500">{title}</h3>
        <div className="text-primary-700 font-regular text-[16px]">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
