import { Route, Routes } from "react-router-dom";
import {
  Darsa,
  Dashboard,
  Mentoring,
  MySurveys,
  Templates,
  Thiru,
  DisplayQuestion,
  SurveyCreation,
} from "../pages";
import Login from "../pages/login";

import { Response } from "../pages/Response";

export const PublicRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/mySurveys" element={<MySurveys />} />
      <Route path="/mentoring" element={<Mentoring />} />
      <Route path="/thiru" element={<Thiru />} />
      <Route path="/darsa" element={<Darsa />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/surveyCreation/:id" element={<SurveyCreation />} />
      <Route path="/question" element={<DisplayQuestion />} />
      <Route path="/login" element={<Login />} />
      <Route path="/response" element={<Response/>} />
    </Routes>
  );
};
