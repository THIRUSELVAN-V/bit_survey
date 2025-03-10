import React from 'react';
import { PublicRoute } from './routes';
import { Header, SideBar } from './components';
import { useLocation } from 'react-router-dom';

export const Layout = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    
    // List of paths where the sidebar should not be displayed
    const nosidebar = [
        '/darsa',
       
    ];

    // Check if the current path is in the nosidebar array
    const shouldShowSidebar = !nosidebar.includes(location.pathname);

    return (
        <div className="h-screen bg-content1-50">
            {isLoginPage ? (
                <div className="h-screen flex flex-col justify-center bg-content1-50">
                    <PublicRoute />
                </div>
            ) : (
                // Render the full layout for other pages
                <div className="h-screen grid grid-cols-6 bg-content1-50">
                    {shouldShowSidebar && <SideBar />}
                    <div className={`h-screen ${shouldShowSidebar ? 'col-span-5' : 'col-span-6'}`}>
                        <div className="h-[13%]">
                            <Header title="Dashboard" />
                        </div>
                        <div className="h-[87%] overflow-y-auto custom-scrollbar p-6">
                            <PublicRoute />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};