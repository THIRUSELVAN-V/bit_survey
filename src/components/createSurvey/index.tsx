import { CreateQuestion } from "../createQuestion";

interface CreateSurveyProps{
    surveyName?:string;
}
export const CreateSurvey = ({
    surveyName="Untittled",
}:CreateSurveyProps) => {
  return (
    <div className=''>
        <p className="font-bold text-[22px] text-content2-800 pb-6">{surveyName}</p>
        <CreateQuestion/>
    </div>
  )
}