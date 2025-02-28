import { cn } from "@heroui/react";
import React, { ReactNode } from "react";

interface SurveyOptionProps {
  iconBgColor: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  onChange?: () => void; // Optional onChange prop
}

export const SurveyOption = ({
  iconBgColor,
  icon,
  title,
  description,
  onChange,
}: SurveyOptionProps) => {
  return (
    <div className="w-full border-primary-800 border-2 rounded-md flex flex-row gap-4 p-3">
      {/* Icon Container */}
      <div
        
        className={cn("w-14 h-14 rounded-full flex items-center justify-center",iconBgColor)}
      >
        {icon}
      </div>
      {/* Text Content */}
      <div>
        <h3 className="font-semibold">{title}</h3>
        <div className="text-primary-700 font-semibold">
          <p>{description}
          </p>
          </div>
      </div>
    </div>
  );
};