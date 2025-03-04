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

export const PublicRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/mySurveys" element={<MySurveys />} />
      <Route path="/mentoring" element={<Mentoring />} />
      <Route path="/thiru" element={<Thiru />} />
      <Route path="/darsa" element={<Darsa />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/surveyCreation" element={<SurveyCreation />} />
      <Route path="/question" element={<DisplayQuestion />} />
    </Routes>
  );
};
