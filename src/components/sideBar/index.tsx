import { useNavigate } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { LuFileSearch2 } from "react-icons/lu";
import { IoPeopleOutline, IoMenu } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { Logo } from "../../assets/logo";
import React, { useState } from "react";
import { IconButtonComponent } from "../iconButton"; // Import the IconButtonComponent

interface MenuItem {
  id: number;
  name: string;
  path: string;
  icon: React.ReactNode;
}

export const SideBar = () => {
  const [activeItem, setActiveItem] = useState<number>(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false); // State for mobile sidebar toggle
  const navigate = useNavigate();

  const menuItems: MenuItem[] = [
    { id: 1, name: "Dashboard", icon: <MdOutlineDashboard size={20} />, path: "/" },
    { id: 2, name: "My Surveys", icon: <LuFileSearch2 size={20} />, path: "/mySurveys" },
    { id: 3, name: "Mentoring", icon: <IoPeopleOutline size={20} />, path: "/mentoring" },
    { id: 5, name: "Thiru", icon: <IoPeopleOutline size={20} />, path: "/thiru" },
    { id: 6, name: "Darsa", icon: <IoPeopleOutline size={20} />, path: "/darsa" },
    { id: 8, name: "Question", icon: <LuFileSearch2 size={20} />, path: "/question" },
  ];

  const handleClick = (id: number, path: string) => {
    setActiveItem(id);
    navigate(path);
    setIsSidebarOpen(false); // Close sidebar on mobile after navigation
  };

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <>
      {/* Mobile Menu Toggle Button using IconButtonComponent */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <IconButtonComponent
          buttonIcon={<IoMenu size={30} />}
          handleOnClick={() => setIsSidebarOpen(!isSidebarOpen)}
          btnClassName="bg-primary-500 text-white border-none hover:bg-primary-500"
        />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed lg:relative h-screen bg-background border-r border-content1-600 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } lg:translate-x-0 w-64 z-40`}
      >
        {/* Header */}
        <div className="flex items-center gap-2 pl-12 pt-8 mb-10">
          <Logo />
          <h1 className="text-primary-500 font-bold uppercase text-xl">BIT SURVEY</h1>
        </div>

        {/* Menu Items */}
        <div className="h-full flex flex-col gap-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`flex items-center p-4 w-full text-left ${
                activeItem === item.id
                  ? "border-l-4 border-primary-500 bg-primary-50"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => handleClick(item.id, item.path)}
            >
              <span className="text-black-800 mr-3 font-semibold transform scale-110">
                {item.icon}
              </span>
              <span className="text-black-800 font-semibold">{item.name}</span>
            </button>
          ))}
        </div>

        {/* Footer - Logout */}
        <div className="pb-9 pl-11 border-gray-200">
          <button
            type="button"
            className="flex items-center w-full text-left text-gray-600 hover:text-primary-500"
            onClick={handleLogout}
            aria-label="Logout"
          >
            <span className="mr-3">
              <TbLogout2 />
            </span>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};