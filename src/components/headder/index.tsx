
import { SearchIcon, SettingIcon } from "../../assets";
import { InputField } from "../inputField";
import { IconButtonComponent } from "../iconButton";
import { GoBell } from "react-icons/go";
import { Avatar } from "@heroui/react";
interface HeaderProps{
  title?:string;
}
export const Header = ({
  title,
}:HeaderProps) => {
  return (
    <div className='border border-primary-900 flex py-5 px-10 bg-background items-center justify-between'>
        <p className="font-semibold text-primary-800 text-[1.75rem] ">{title}</p>
        <div className="flex gap-[1.875rem]">
          <InputField
            startContent = {<SearchIcon fill="#718EBF"/>}
            inputWrapperClassName="py-4 px-5 border-none bg-content1-50 rounded-full"
            placeholder="Search for something"
            customInputValueStyle="placeholder:text-content1-100 "
          />
          <IconButtonComponent 
            border="none"
            buttonIcon={<SettingIcon/>}
            btnClassName="bg-content1-50 p-3 rounded-full"
          />
          <IconButtonComponent 
            border="none"
            buttonIcon={<GoBell size={25} className="text-content1-200" />}
            btnClassName="bg-content1-50 p-3 rounded-full"
          />
          <div >
          <Avatar  src="https://i.pinimg.com/736x/c9/d2/d9/c9d2d9fc147d4d16bdc8a348515313c8.jpg"
            
           />
           </div>
        </div>
        
    </div>
  )
}

