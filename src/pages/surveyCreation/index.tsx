import { useParams } from "react-router-dom";
import { CreateSurvey } from "../../components"
import { useQuestionStore } from "../../store/useQuestionStore";
import React from "react";

export const SurveyCreation = () => {
  const {id} = useParams();
  console.log(id)
  const {fetchAllQuestions}=useQuestionStore()
  React.useEffect(()=>{
    fetchAllQuestions(Number(id))
  },[])
  return (
    <div className="bg-background min-h-full rounded-xl p-5 ">
        <CreateSurvey/>
    </div>
  )
}