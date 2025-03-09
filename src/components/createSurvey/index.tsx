import { useQuestionStore } from "../../store/useQuestionStore";
import { CreateQuestion } from "../createQuestion";
import { QuestionDisplay } from "../questionDisplay";

interface CreateSurveyProps {
  surveyName?: string;
}
export const CreateSurvey = ({
  surveyName = "Untittled",
}: CreateSurveyProps) => {
  const { currentQuestions,questions,survey ,deleteOuestion } = useQuestionStore();

  const questionData = [
    {
      id: 1,
      question: "Rating of the session?",
      options: ["1", "2", "3"],
      type: "single-choice",
    },
    {
      id: 2,
      question: "Which programming languages do you know?",
      options: ["JavaScript", "Python", "Java", "C++", "Go"],
      type: "multi-choice",
    },
    {
      id: 3,
      question: "What is your favorite color?",
      options: ["Red", "Green", "Yellow", "Purple"],
      type: "single-choice",
    },
    {
      id: 4,
      question: "Which of the following are backend frameworks?",
      options: ["Express", "Django", "Flask", "Spring", "Laravel"],
      type: "multi-choice",
    },
  ];
  

  const handleDelete = (questionId:number) =>{
    deleteOuestion(survey.id,questionId)
  }

  return (
    <div className="">
      <p className="font-bold text-[22px] text-content2-800 pb-5 ">
        {surveyName}
      </p>
      <div className="flex flex-col gap-6 pb-6">
        {
          questions?.map((question, index) => (
            <QuestionDisplay
              key={question.id}
              id={question.id}
              question={question.question}
              options={question.optionsQuestions}
              questionType={question.isMultiple?"multi-choice":"single-choice"}
              index={index}
              onDelete={handleDelete}
            />
          ))
        }
      </div>
      {currentQuestions.map((_, index) => (
        <CreateQuestion key={index} index={index} />
      ))}
    </div>
  );
};
