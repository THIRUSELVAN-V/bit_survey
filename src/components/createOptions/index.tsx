
import { InputField } from "../inputField";
import { IconButtonComponent } from "../iconButton";
import { MdAdd } from "react-icons/md";
import { IoMdRemove } from "react-icons/io";
import { Checkbox } from "@heroui/react";
import { useQuestionStore } from "../../store/useQuestionStore";
interface CreateOptionsProps{
  index:number
}
export const CreateOptions = ({index}:CreateOptionsProps) => {
  
  const {currentQuestions,setCurrentQuestionField} = useQuestionStore()
  // console.log("CreateOptions",currentQuestions);

  const handleOptionChange = (id: number, value: string) => {
    const updatedOptions = currentQuestions[index].options.map((option) =>
      option.id === id ? { ...option, option: value } : option
    );
  
    setCurrentQuestionField(index,"options", updatedOptions);
  };
  const handleAddOption = (id: number) => {
    const newOption = { id: Date.now(), option: "" }; // unique id
    const ind = currentQuestions[index].options.findIndex((option) => option.id === id);
    const newOptions = [
      ...currentQuestions[index].options.slice(0, ind + 1),
      newOption,
      ...currentQuestions[index].options.slice(ind + 1),
    ];
    setCurrentQuestionField(index,"options",newOptions);
  };
  const handleRemoveOption = (id: number) => {
    if (currentQuestions[index].options.length <= 1) return; // Prevent removing the last option
    setCurrentQuestionField(index,"options",currentQuestions[index].options.filter((option) => option.id !== id));
  };

  // console.log(currentQuestions[index].options);
  
  return (
    <div className="flex flex-col gap-6">
      {currentQuestions[index].options.map((item, index) => (
        <div key={index} className="flex items-center gap-[0.625rem]">
          <Checkbox 
            radius="full" 
            isReadOnly={!currentQuestions[index]?.isScore}
          />
          <InputField
            placeholder={`Enter Option ${index + 1}`}
            inputValue={item.option}
            onValueChange={(value) => handleOptionChange(item.id, value)}
          />
          <div className="flex gap-2">
            <IconButtonComponent
              buttonIcon={<MdAdd size={24} className="text-secondary-400" />}
              btnClassName="bg-transparent rounded-full p-[6px] border-[2px] border-content2-1004"
              handleOnClick={() => handleAddOption(item.id)}
            />
            <IconButtonComponent
              buttonIcon={
                <IoMdRemove size={24} className="text-secondary-400" />
              }
              btnClassName="bg-transparent rounded-full p-[6px] border-[2px] border-content2-1004"
              handleOnClick={() => handleRemoveOption(item.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
