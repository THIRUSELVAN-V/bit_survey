import React from "react";
import { useQuestionStore } from "../../store/useQuestionStore";
import { CreateQuestion } from "../createQuestion";
import { Modals } from "../modal";
import { QuestionDisplay } from "../questionDisplay";
import { PreviewModel } from "../PreviewModel";

export const CreateSurvey = () => {
  const { currentQuestions, questions, survey, deleteOuestion } =
    useQuestionStore();
  const [isPreviewOpen, setIsPreviewOpen] = React.useState(false);

  const handleDelete = (questionId: number) => {
    deleteOuestion(survey.id, questionId);
  };

  return (
    <div className="">
      <p className="font-bold text-[22px] text-content2-800 pb-5 ">
        {survey.name || "Untittled"}
      </p>
      <div className="flex flex-col gap-6 pb-6">
        {questions?.map((question, index) => (
          <QuestionDisplay
            key={question.id}
            id={question.id}
            question={question.question}
            options={question.optionsQuestions}
            questionType={
              question.isMultiple ? "multi-choice" : "single-choice"
            }
            index={index}
            onDelete={handleDelete}
          />
        ))}
      </div>
      {currentQuestions.map((_, index) => (
        <CreateQuestion key={index} index={index} />
      ))}
      <div className="bg-content2-1007 my-4 p-1 cursor-pointer flex justify-center items-center" onClick={() => setIsPreviewOpen(true)}>
        <p className="font-medium text-sm text-content2-400">
          Copy and paste questions
        </p>
      </div>
      <Modals
        isopen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        hideCloseButton
        ModalContents={
          <div className="">
            <PreviewModel 
              handleClose={()=>setIsPreviewOpen(false)}
            />
          </div>
        }
        bodyClassName="p-0"
        size="lg"
        modalClassName="h-[37.5rem] w-[54.438rem] overflow-y-auto  scrollbar-hide sm:my-0 "
      />
    </div>
  );
};
