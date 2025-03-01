import { Avatar } from "@heroui/react";
import { ButtonComponent } from "../button";

export const NoGroupCreationCard = () => {
  return (
    <div className="flex flex-col w-fit items-center justify-center ">
      <div className="flex gap-6 relative mb-5">
        <div>
          <Avatar
            src="https://i.pinimg.com/736x/c9/d2/d9/c9d2d9fc147d4d16bdc8a348515313c8.jpg"
            className="w-[48px] h-[48px]"
          />
        </div>
        <div className="absolute left-1/4 bottom-0 border-[1.5px] rounded-full border-background z-10">
          <Avatar
            src="https://i.pinimg.com/736x/c9/d2/d9/c9d2d9fc147d4d16bdc8a348515313c8.jpg"
            className="w-[56px] h-[56px]"
          />
        </div>
        <div>
          <Avatar
            src="https://i.pinimg.com/736x/c9/d2/d9/c9d2d9fc147d4d16bdc8a348515313c8.jpg"
            className="w-[48px] h-[48px]"
          />
        </div>
      </div>
      <p className="font-semibold text-[18px] text-content2-100 pb-2">Pick the members</p>
      <p className="font-regular text-[14px] text-content2-200 pb-[3.25rem] w-[19.5rem] text-center">You wanna create a new group! Add members to contribute to your survey.</p>
      <ButtonComponent
        ButtonVariant="solid"
        buttonText="Set conditions"
        isIcon={false}
        bgColor="bg-primary"
        textClassName="text-background font-semibold text-[1rem]"
        baseClassName="border-none w-full"
      />
    </div>
  );
};
