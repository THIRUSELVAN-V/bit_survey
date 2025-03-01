import React from 'react';
import { ProgressComp } from '../progressComp'; // Adjust the import path as needed
import { Chip } from '../chip'; // Adjust the import path as needed
import { ButtonComponent } from '../button'; // Adjust the import path as needed
import { Avatar, cn } from '@heroui/react'; // Assuming Heroui provides an Avatar component
import { BsThreeDotsVertical } from 'react-icons/bs'; // Import the three-dot icon

interface SurveyCardProps {
  title?: string;
  chipLabel?: string;
  subtitle?: string;
  description?: string;
  progressValue?: number;
  progressLabel?: string;
  avatarUrls?: string[];
  responseCount?: number;
  buttonText?: string;
  bgColor?: string;
  textColor?: string;
  progressColor?: string;
  progressOutlineColor?: string;
  chipVariant?: 'primary' | 'neutral' | 'danger' | 'success' | 'warning' | '';
  buttonVariant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
  chipBgColor?: string; // Custom background color for Chip
  chipBorderRadius?: string; // Custom border radius for Chip
  chipTextClassName:string;
  chipBaseClassName:string;
  progressClassName:string
}

export const SurveyCard: React.FC<SurveyCardProps> = ({
  title,
  chipLabel,
  subtitle,
  description,
  progressValue = 0,
  progressLabel = 'Loading...',
  avatarUrls = [],
  responseCount = 0,
  buttonText = '',
  progressColor,
  progressOutlineColor = 'border-gray-300',
  chipVariant = 'primary',
  chipTextClassName,
  chipBaseClassName,
  progressClassName,
}) => {
  return (
    <div
      className={'p-4 rounded-lg shadow-sm bg-secondary-200'}
    >
      {/* Header Section with Chip/Title and Three-Dot Icon */}
      <div className="flex justify-between items-center">
        {/* Conditional rendering for Chip or Title */}
        {chipLabel ? (
          <Chip
            label={chipLabel}
            chipVariant={chipVariant}
            textClassName={chipTextClassName}
            baseClassName={cn(`px-2 py-1  ${chipLabel==="Completed"?"borderColor":"success-100"}`,chipBaseClassName)} // Custom border radiuschipBaseClassName}

          // Custom border radius
          />
        ) : (
          <span className={'text-lg font-semibold text-white-800'}>{title}</span>
        )}
        {/* Three-Dot Icon (always rendered at the right end) */}
        <BsThreeDotsVertical className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700" />
      </div>

      {/* Subtitle and Description */}
      <div className={'mt-4 text-white-800'}>
        <h4 className="text-lg font-semibold">{subtitle}</h4>
        <p className="text-md mt-1">{description}</p>
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
      <ProgressComp
  value={progressValue}
  label={progressLabel}
  outlineColor={progressValue === 100 ? "border-gray-400" : "border-primary-200"}
  color={progressValue === 100 ? "bg-gray-400" : "bg-primary-200"}
  baseClassName={cn(`rounded-full ${progressValue === 100 ? 'border-gray-400' : 'border-primary-200'}`)}
/>
      </div>

      {/* Avatar Group and Button */}
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex -space-x-2">
            {avatarUrls.slice(0, 2).map((url, index) => (
              <Avatar key={index} src={url} className="h-8 w-8" />
            ))}
            {avatarUrls.length > 2 && (
              <div className="h-8 w-8 bg-[#FCA465] rounded-full flex items-center justify-center text-white text-xs">
                +{avatarUrls.length - 2}
              </div>
            )}
          </div>
          <span className="ml-2 text-sm text-warning-100 font-medium">{responseCount} responses</span>
        </div>
        <ButtonComponent
          buttonText={buttonText}
          handleOnClick={() => console.log('Form submitted')}
          isIcon={false} // Icon will not be displayed
          bgColor="bg-green-500"
          ButtonVariant="solid"
          textClassName='text-lg text-white'
          baseClassName={cn(`rounded-md px-4 ${buttonText==="Start" || buttonText==="View"?"bg-success-100":"bg-warning"}`,)} // Additional custom styles
        />
      </div>
    </div>
  );
};