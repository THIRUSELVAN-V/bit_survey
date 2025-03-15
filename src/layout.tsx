import React from 'react'
import { Header, SideBar } from './components'
import { PublicRoute } from './routes'
import { useLocation } from 'react-router-dom'
export const Layout = () => {
  const location = useLocation()
  const isLogin = location.pathname === "/login"
  return (
    <div className="h-screen  grid grid-cols-6 bg-content1-50">
        {!isLogin &&(
        <div className="hidden md:block">
        <SideBar />
        </div>
        )}
        <div className={`${isLogin?"col-span-6 h-screen":"col-span-5 h-screen"}`}>
          <div className="h-[13%]">
            {!isLogin && <Header title="Dashboard " />}
          </div>
          <div className="row-span-7 h-[87%] overflow-y-auto custom-scrollbar p-6">
            <PublicRoute />
          </div>
        </div>
      </div>
  )
}