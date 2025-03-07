import { InputField } from "../inputField";
import { SelectInput } from "../selectInput";
import { PreDefinedOptions } from "../preDefinedOptions";
import {  useQuestionStore } from "../../store/useQuestionStore";
import { CreateOptions } from "../createOptions";
import { OptionsBox } from "../OptionsBox";
import { ButtonComponent } from "../button";
import { FiPlus } from "react-icons/fi";
import React from "react";

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
    getPredefinedOptions,
    getQuestionTypes,
    isScore,
    setIsScore,
    isOther,
    setIsOther,
    createQuestion
    
  } = useQuestionStore();

  
  const selectedQType = Array.from(selectedQuestionType)[0];
  console.log(selectedQType);


  React.useEffect(()=>{
    getPredefinedOptions();
    getQuestionTypes()
  },[])
  const oo=[
    {id:1,name:"Score this question (enable quiz mode)"},
    {id:2,name:'Add an "Other" Answer Option '},
  ]
  const initialSelectedOptions = [];
if (isScore) {
    initialSelectedOptions.push({ id: 1, name: "Score this question (enable quiz mode)" });
}
if (isOther) {
    initialSelectedOptions.push({ id: 2, name: 'Add an "Other" Answer Option ' });
}

  const onCheckBoxSelected = (val:{id:number,name:string}[])=>{
    setIsScore(val.some(opt => opt.id === 1));
    setIsOther(val.some(opt => opt.id === 2));
  }
  console.log("hi",isScore,isOther);
  
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
          <CreateOptions />
        </div>
        <div>
          <OptionsBox
            options={oo}
            onCheckBoxSelected={onCheckBoxSelected}
            selectedOptions={[
              ...(isScore ? [{ id: 1, name: "Score this question (enable quiz mode)" }] : []),
              ...(isOther ? [{ id: 2, name: 'Add an "Other" Answer Option ' }] : [])
          ]}
          />
        </div>
      </div>
      <div className="px-5 pt-4 flex justify-between">
        <ButtonComponent
          bgColor="bg-primary"
          buttonIcon={<FiPlus size={24} className="text-background " />}
          buttonText="Next question"
          textClassName="text-background text-base"
          baseClassName="border-none rounded-[4px]"
          handleOnClick={()=>createQuestion()}
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
          />
        </div>
      </div>
    </div>
  );
};
