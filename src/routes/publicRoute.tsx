import { Route, Routes } from "react-router-dom"
import { Darsa, Dashboard, Templates, Thiru } from "../pages"

export const PublicRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/thiru" element={<Thiru/>}/>
        <Route path="/darsa" element={<Darsa/>}/>
        <Route path="/templates" element={<Templates/>}/>
    </Routes>
  )
}

