import { useState, MouseEvent, KeyboardEvent, ReactNode } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { LuFileSearch2 } from "react-icons/lu";
import { IoPeopleOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { Logo } from "../../assets/logo";

interface MenuItem {
  id: number;
  name: string;
  icon: ReactNode; // Use ReactNode instead of JSX.Element
}

export const SideBar = () => {
  const [activeItem, setActiveItem] = useState<string>("Dashboard");

  const menuItems: MenuItem[] = [
    { id: 1, name: "Dashboard", icon: <MdOutlineDashboard /> },
    { id: 2, name: "My Surveys", icon: <LuFileSearch2 /> },
    { id: 3, name: "Mentoring", icon: <IoPeopleOutline /> },
  ];

  // Handle click and keyboard events for menu items
  const handleItemInteraction = (
    event: MouseEvent | KeyboardEvent,
    itemName: string
  ) => {
    if (
      event.type === "click" ||
      (event as KeyboardEvent).key === "Enter" ||
      (event as KeyboardEvent).key === " "
    ) {
      setActiveItem(itemName);
    }
  };

  // Handle logout interaction
  const handleLogoutInteraction = (event: MouseEvent | KeyboardEvent) => {
    if (
      event.type === "click" ||
      (event as KeyboardEvent).key === "Enter" ||
      (event as KeyboardEvent).key === " "
    ) {
      console.log("Logout clicked");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white shadow-lg w-full">
      {/* Header */}
      <div className="">
        <div className="flex items-center gap-2 p-4">
          <Logo />
          <h1 className="text-primary-500 font-bold uppercase text-xl">
            BIT SURVEY
          </h1>
        </div>
        {/* Divider */}
        <hr className="mb-4 w-full border-gray-200" />
      </div>

      {/* Menu Items */}
      <div className="h-[calc(100vh-14
      0px)] overflow-y-auto"> {/* Fixed height for menu items */}
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button" // Explicitly set the button type
            className={`flex items-center p-4 w-full text-left ${
              activeItem === item.name
                ? "border-l-4 border-primary-500 bg-primary-50"
                : "hover:bg-gray-50"
            }`}
            onClick={(e) => handleItemInteraction(e, item.name)}
            onKeyDown={(e) => handleItemInteraction(e, item.name)}
            tabIndex={0} // Make the button focusable
            aria-label={item.name} // Provide an accessible name
          >
            <span className="text-black-800 mr-3 font-semibold transform scale-110">
              {item.icon}
            </span>
            <span className="text-black-800 font-semibold">{item.name}</span>
          </button>
        ))}
      </div>

      {/* Footer - Logout */}
      <div className="p-4 border-t border-gray-200">
        <button
          type="button" // Explicitly set the button type
          className="flex items-center w-full text-left text-gray-600 hover:text-primary-500"
          onClick={handleLogoutInteraction}
          onKeyDown={handleLogoutInteraction}
          tabIndex={0} // Make the button focusable
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