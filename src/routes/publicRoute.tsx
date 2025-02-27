import { Route, Routes } from "react-router-dom"
import { Thiru } from "../pages"

export const PublicRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Thiru/>}/>
    </Routes>
  )
}

