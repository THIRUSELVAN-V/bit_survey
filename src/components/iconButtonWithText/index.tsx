import { cn } from "@heroui/react";
import { SyncIcon } from "../../assets";

interface IconButtonWithTextProps{
    icon?:React.ReactNode;
    text?:string;
    color?:string;
    baseClass?:string;
    handleOnClick?: () => void;
}
export const IconButtonWithText = ({
    icon =<SyncIcon/>,
    text = "SyncIcon",
    color,
    baseClass,
    handleOnClick = () => false,
}:IconButtonWithTextProps) => {
  return (
    <div onClick={() => handleOnClick()} className={cn("border border-content1-300 bg-background flex flex-col gap-1 w-fit items-center justify-center py-6 px-[2.375rem] rounded-xl",baseClass)}>
        {icon}
        <p className={cn("font-regular text-[0.75rem]",color)}>{text}</p>
    </div>
  )
}

