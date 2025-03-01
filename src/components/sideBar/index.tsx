import { useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { MdOutlineDashboard } from "react-icons/md";
import { LuFileSearch2 } from "react-icons/lu";
import { IoPeopleOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { Logo } from "../../assets/logo";

interface MenuItem {
  id: number;
  name: string;
  path: string;
  icon: ReactNode; // Use ReactNode instead of JSX.Element
}

export const SideBar = () => {
  const [activeItem, setActiveItem] = useState<number>(1);
  const navigate = useNavigate();




  const menuItems: MenuItem[] = [
    { id: 1, name: "Dashboard", icon: <MdOutlineDashboard size={20}/>,path:"/" },
    { id: 2, name: "My Surveys", icon: <LuFileSearch2 size={20} />,path:"/thiru" },
    { id: 3, name: "Mentoring", icon: <IoPeopleOutline size={20} />,path:"/darsa" },
    { id: 4, name: "Templates", icon: <IoPeopleOutline size={20} />,path:"/templates" },
  ];

  
  const handleClick = (id:number,path: string) => {
      setActiveItem(id);
      navigate(path);
  };

  // Handle logout interaction
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <div className="flex flex-col h-screen bg-background border-r border-content1-600 ">
      {/* Header */}
        <div className="flex items-center gap-2 pl-12 pt-8 mb-10">
          <Logo />
          <h1 className="text-primary-500 font-bold uppercase text-xl">
            BIT SURVEY
          </h1>
        </div>

      {/* Menu Items */}
      <div className="h-full flex flex-col gap-3"> {/* Fixed height for menu items */}
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button" // Explicitly set the button type
            className={`flex items-center p-4 w-full text-left ${
              activeItem === item.id
                ? "border-l-4 border-primary-500 bg-primary-50"
                : "hover:bg-gray-50"
            }`}
            onClick={()=>handleClick(item.id,item.path)}
            // Provide an accessible name
          >
            <span className="text-black-800 mr-3 font-semibold transform scale-110">
              {item.icon}
            </span>
            <span className="text-black-800 font-semibold">{item.name}</span>
          </button>
        ))}
      </div>

      {/* Footer - Logout */}
      <div className="pb-9 pl-11  border-gray-200">
        <button
          type="button" // Explicitly set the button type
          className="flex items-center w-full text-left text-gray-600 hover:text-primary-500"
          onClick={handleLogout}
          aria-label="Logout" // Provide an accessible name
        >
          <span className="mr-3">
            <TbLogout2 />
          </span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};