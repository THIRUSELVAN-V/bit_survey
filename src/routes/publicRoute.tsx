import { Route, Routes } from "react-router-dom"
import { Darsa, Thiru } from "../pages"

export const PublicRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Thiru/>}/>
        <Route path="/darsa" element={<Darsa/>}/>
    </Routes>
  )
}

