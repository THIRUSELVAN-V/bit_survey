
import { InputField } from "../inputField";
import { IconButtonComponent } from "../iconButton";
import { MdAdd } from "react-icons/md";
import { IoMdRemove } from "react-icons/io";
import { Checkbox } from "@heroui/react";
import { useQuestionStore } from "../../store/useQuestionStore";
export const CreateOptions = () => {
  const {isScore,options,setOptions} = useQuestionStore()

  const handleOptionChange = (id: number, value: string) => {
    setOptions(
      options.map((option) =>
        option.id === id ? { ...option, option: value } : option
      )
    );
  };
  const handleAddOption = (id: number) => {
    const newOption = { id: Date.now(), option: "" }; // unique id
    const index = options.findIndex((option) => option.id === id);
    const newOptions = [
      ...options.slice(0, index + 1),
      newOption,
      ...options.slice(index + 1),
    ];
    setOptions(newOptions);
  };
  const handleRemoveOption = (id: number) => {
    if (options.length <= 1) return; // Prevent removing the last option
    setOptions(options.filter((option) => option.id !== id));
  };

  console.log(options);
  
  return (
    <div className="flex flex-col gap-6">
      {options.map((item, index) => (
        <div key={index} className="flex items-center gap-[0.625rem]">
          <Checkbox 
            radius="full" 
            isReadOnly={!isScore}
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
