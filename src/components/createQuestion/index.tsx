import  { useMemo, useState } from "react";
import { TabBar } from "../switchTab";
import { QuestionAndOptionsCreation } from "../questionAndOptionsCreation";
interface CreateQuestionProps{
  index:number;
}
export const CreateQuestion = ({index}:CreateQuestionProps) => {
  const [activeTab, setActiveTab] = useState("EDIT");

  // Memoize the tabs array to prevent unnecessary re-renders
  const tabs = useMemo(
    () => [
      { id: "EDIT", label: "EDIT", content: <div> <QuestionAndOptionsCreation index={index} /></div> },
      { id: "OPTIONS", label: "OPTIONS", content: <div> hi</div> },
    ],
    [index]
  );
  return (
    <div className="border border-content2-1002 rounded-sm">
      <TabBar
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab} // Custom color for selected tabs
        borderColor="bg-warning-700"
        normalTabColor="text-background-foreground"
        selectedTabColor="text-background-foreground"
        tablistClassName="gap-6 border-none p-0 px-6"
        tabClassName="px-0"
      />
    </div>
  );
};
