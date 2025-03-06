import { InputField } from "../inputField";
import { SelectInput } from "../selectInput";
import { PreDefinedOptions } from "../preDefinedOptions";
import { useQuestionStore } from "../../store/useQuestionStore";
import { CreateOptions } from "../createOptions";
import { OptionsBox } from "../OptionsBox";

export const QuestionAndOptionsCreation = () => {
  const {
    question,
    setQuestion,
    selectedQuestionType,
    setSelectedQuestionType,
    isPreDefinedOptions,
    setIsPreDefinedOptions,
    scale,
    predefinedOptions,
    questionTypes,
  } = useQuestionStore();
  
  const selectedQType = Array.from(selectedQuestionType)[0];
  console.log(selectedQType);
  return (
    <div>
      <div className="bg-content2-1003 pt-2">
        <div className="py-6 px-5 flex gap-6 items-center ">
          <p className="font-semibold text-xs text-background-foreground">Q1</p>
          <InputField
            placeholder="Enter the question"
            inputValue={question}
            onValueChange={setQuestion}
          />
          <SelectInput
            selectOptions={questionTypes}
            placeholder="Select Question Type"
            selectedKeys={selectedQuestionType}
            onSelectionChange={setSelectedQuestionType}
          />
        </div>
        <div className="py-4 px-5 border-y border-content2-1004">
          <PreDefinedOptions
            isSelected={isPreDefinedOptions}
            setIsSelected={setIsPreDefinedOptions}
            scale={scale}
            predefinedOptions={predefinedOptions}
          />
        </div>
        <div className="px-9 py-7 ">
          <CreateOptions/>
        </div>
        <div>
          <OptionsBox
            options={["Score this question (enable quiz mode)",'Add an "Other" Answer Option ']}
          />
        </div>
      </div>
      questionAndOptionsCreation
    </div>
  );
};
