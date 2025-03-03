import { Route, Routes } from "react-router-dom"
import { Darsa, Dashboard, Mentoring, MySurveys, Templates, Thiru ,GroupCreation } from "../pages"

import { Response } from "../pages/Response";

export const PublicRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/mySurveys" element={<MySurveys/>}/>
        <Route path="/mentoring" element={<Mentoring/>}/>
        <Route path="/thiru" element={<Thiru/>}/>
        <Route path="/darsa" element={<Darsa/>}/>
        <Route path="/templates" element={<Templates/>}/>
        <Route path="/groupCreation" element={<GroupCreation/>}/>
      <Route path="/response" element={<Response/>} />
    </Routes>
  )
}

