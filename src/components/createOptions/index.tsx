import React from "react";
import { InputField } from "../inputField";
import { IconButtonComponent } from "../iconButton";
import { MdAdd } from "react-icons/md";
import { IoMdRemove } from "react-icons/io";
export const CreateOptions = () => {
  const [question, setQuestion] = React.useState("");
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-[0.625rem] ">
        <div className="w-4 h-4 border rounded-full border-content2-1004 cursor-pointer mr-4"></div>
        <InputField
          placeholder="Enter Options"
          inputValue={question}
          onValueChange={setQuestion}
        />
        <div className="flex gap-2">
          <IconButtonComponent
            buttonIcon={<MdAdd size={24} className="text-secondary-400" />}
            btnClassName="bg-transparent rounded-full p-[6px] border-[2px] border-content2-1004"
          />
          <IconButtonComponent
            buttonIcon={<IoMdRemove size={24} className="text-secondary-400" />}
            btnClassName="bg-transparent rounded-full p-[6px] border-[2px] border-content2-1004"
          />
        </div>
      </div>
      <div className="flex items-center gap-[0.625rem] ">
        <div className="w-4 h-4 border rounded-full border-content2-1004 cursor-pointer mr-4"></div>
        <InputField
          placeholder="Enter Options"
          inputValue={question}
          onValueChange={setQuestion}
        />
        <div className="flex gap-2">
          <IconButtonComponent
            buttonIcon={<MdAdd size={24} className="text-secondary-400" />}
            btnClassName="bg-transparent rounded-full p-[6px] border-[2px] border-content2-1004"
          />
          <IconButtonComponent
            buttonIcon={<IoMdRemove size={24} className="text-secondary-400" />}
            btnClassName="bg-transparent rounded-full p-[6px] border-[2px] border-content2-1004"
          />
        </div>
      </div>
      <div className="flex items-center gap-[0.625rem] ">
        <div className="w-4 h-4 border rounded-full border-content2-1004 cursor-pointer mr-4"></div>
        <InputField
          placeholder="Enter Options"
          inputValue={question}
          onValueChange={setQuestion}
        />
        <div className="flex gap-2">
          <IconButtonComponent
            buttonIcon={<MdAdd size={24} className="text-secondary-400" />}
            btnClassName="bg-transparent rounded-full p-[6px] border-[2px] border-content2-1004"
          />
          <IconButtonComponent
            buttonIcon={<IoMdRemove size={24} className="text-secondary-400" />}
            btnClassName="bg-transparent rounded-full p-[6px] border-[2px] border-content2-1004"
          />
        </div>
      </div>
    </div>
  );
};
