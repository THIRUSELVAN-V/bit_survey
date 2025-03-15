import { InputField } from "../inputField";
import { SelectInput } from "../selectInput";
import { PreDefinedOptions } from "../preDefinedOptions";
import { useQuestionStore } from "../../store/useQuestionStore";
import { CreateOptions } from "../createOptions";
import { OptionsBox } from "../OptionsBox";
import { ButtonComponent } from "../button";
import { FiPlus } from "react-icons/fi";
import React, { useCallback, useMemo, useState } from "react";
import { Modals } from "../modal";
import { BulkAnswers } from "../bulkAnswers";
interface QuestionAndOptionsCreationProps {
  index: number;
}
export const QuestionAndOptionsCreation = ({
  index,
}: QuestionAndOptionsCreationProps) => {
  const {
    survey,
    currentQuestions,
    setCurrentQuestionField,
    questions,
    scale,
    predefinedOptions,
    questionTypes,
    // addQuestion,
    submitAllQuestions,
    addNewQuestion,
  } = useQuestionStore();
  // console.log("hihihihihi", survey);
  // console.log("hhaa", currentQuestions);

  const [isBulkAnswerOpen,setIsBulkAnswerOpen] = useState(false)
  const currentQuestion = currentQuestions[index];
  
  // console.log(currentQuestions);

  const oo = useMemo(
    () => [
      { id: 1, name: "Score this question (enable quiz mode)" },
      { id: 2, name: 'Add an "Other" Answer Option ' },
    ],
    []
  );

  const onCheckBoxSelected = useCallback(
    (index: number, val: { id: number; name: string }[]) => {
      setCurrentQuestionField(index, "isScore", val.some((opt) => opt.id === 1));
      setCurrentQuestionField(index, "isOther", val.some((opt) => opt.id === 2));
    },
    [setCurrentQuestionField]
  );

  const selectedOptions = useMemo(
    () => [
      ...(currentQuestion.isScore
        ? [{ id: 1, name: "Score this question (enable quiz mode)" }]
        : []),
      ...(currentQuestion.isOther
        ? [{ id: 2, name: 'Add an "Other" Answer Option ' }]
        : []),
    ],
    [currentQuestion.isScore, currentQuestion.isOther]
  );

  return (
    <div>
      <div className="bg-content2-1003 pt-2">
        <div className="py-6 px-5 flex gap-6 items-center ">
          <p className="font-semibold text-xs text-background-foreground">
            Q{currentQuestion.index + 1}
          </p>
          <InputField
            placeholder="Enter the question"
            inputValue={currentQuestion.question}
            onValueChange={(value) =>
            
              setCurrentQuestionField(index, "question", value)            
            }
          />
          <SelectInput
            selectOptions={questionTypes}
            placeholder="Select Question Type"
            selectedKeys={new Set([currentQuestion.questionTypeId])}
            onSelectionChange={(value: any) =>
              setCurrentQuestionField(
                index,
                "questionTypeId",
                Array.from(value)[0]
              )
            }
          />
        </div>
        {currentQuestion.questionTypeId && (
          <div>
            <div className="py-4 px-5 border-y border-content2-1004">
              <PreDefinedOptions
                index={index}
                isSelected={currentQuestion.isPreDefinedOptions}
                setIsSelected={(value) =>
                  setCurrentQuestionField(index, "isPreDefinedOptions", value)
                }
                scale={scale}
                predefinedOptions={predefinedOptions}
              />
            </div>
            <div className="px-9 py-7 ">
              <CreateOptions index={index} />
            </div>
            <div className="flex items-center justify-end gap-2 cursor-pointer pr-10 pb-3" onClick={()=>setIsBulkAnswerOpen(true)}>
              <div className="p-[2px]  border border-content1-1007 rounded-full">
                <FiPlus size={14} className="text-content1-1007"/>
              </div>
              <p className="font-bold text-[12px] text-content1-1007">
                BULK ANSWERS
              </p>
            </div>
            <div>
            <OptionsBox index={index} options={oo} onCheckBoxSelected={onCheckBoxSelected} selectedOptions={selectedOptions} />
            </div>
          </div>
        )}
      </div>
      <div className="px-5 pt-4 flex justify-between">
        <ButtonComponent
          bgColor="bg-primary"
          buttonIcon={<FiPlus size={24} className="text-background " />}
          buttonText="Next question"
          textClassName="text-background text-base"
          baseClassName="border-none rounded-[4px]"
          handleOnClick={() => submitAllQuestions()}
        />
        <div className="flex gap-5">
          <ButtonComponent
            isIcon={false}
            ButtonVariant="bordered"
            buttonText="Cancel"
            textClassName="text-content1-1007  text-base"
            baseClassName="  rounded-[4px] w-fit px-6"
          />
          <ButtonComponent
            bgColor="bg-primary"
            isIcon={false}
            buttonText="Finish survey"
            textClassName="text-background text-base"
            baseClassName="border-none rounded-[4px]"
            handleOnClick={() => addNewQuestion()}
          />
        </div>
      </div>
      <Modals
        isopen={isBulkAnswerOpen}
        onClose={()=>setIsBulkAnswerOpen(false)}
        hideCloseButton
        ModalContents={
          <div >
            <BulkAnswers index={index} handleClose={()=>setIsBulkAnswerOpen(false)}/>
          </div>
        }
        bodyClassName="p-0"
        size="lg"
        modalClassName="h-[30rem] w-[45rem] overflow-y-auto  scrollbar-hide sm:my-0 "
      />
    </div>
  );
};
