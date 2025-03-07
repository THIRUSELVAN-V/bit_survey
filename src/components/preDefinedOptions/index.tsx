import { Switch } from "@heroui/react";
import { SelectInput } from "../selectInput";
import { useQuestionStore } from "../../store/useQuestionStore";

interface PreDefinedOptionsProps{
    isSelected?:boolean;
    setIsSelected?: (val:boolean)=>void;
    scale:{id:number,label:string}[];
    predefinedOptions:{id:number,label:string}[];
}

export const PreDefinedOptions = ({
    isSelected=false,
    setIsSelected= () =>false,
    scale,
    predefinedOptions
}:PreDefinedOptionsProps) => {
    const {
        selectedScale,
        setSelectedScale,
        selectedPreDefinedOptions,
        setSelectedPreDefinedOptions,
    } = useQuestionStore()
  
  return (
    <div className="flex justify-between items-center">
      <p className={`font-bold text-base ${isSelected?"text-secondary-600":"text-content1-1008"} `}>predefined options</p>
      <div className="flex items-center gap-4 ">
        <p className={`font-medium text-xs ${isSelected?"text-content1-1007":"text-content1-1008"} `}>Scale</p>
        <SelectInput
          selectOptions={scale}
          isDisabled={!isSelected}
          selectedKeys={selectedScale}
          onSelectionChange={setSelectedScale}
          placeholder=""
          size="sm"
          baseClassName="w-[5rem] rounded-[3px]"
        />
        <SelectInput 
            selectOptions={predefinedOptions} 
            isDisabled={!isSelected}
            selectedKeys={selectedPreDefinedOptions}
            onSelectionChange={setSelectedPreDefinedOptions}
            size="sm" 
            baseClassName="w-[13rem] rounded-[3px]"
        />
        <Switch
          isSelected={isSelected} 
          onValueChange={setIsSelected}
          aria-label="Automatic updates"
          classNames={{
            wrapper: "bg-content1-1008",
          }}
        />
      </div>
    </div>
  );
};
