import React from "react";
import { TabBar } from "../switchTab";
import { QuestionAndOptionsCreation } from "../questionAndOptionsCreation";
interface CreateQuestionProps{
  index:number;
}
export const CreateQuestion = ({index}:CreateQuestionProps) => {
  const [activeTab, setActiveTab] = React.useState("tab1");
  const tabs = [
    { id: "tab1", label: "EDIT", content: <div className=""><QuestionAndOptionsCreation index={index}/></div> },
    { id: "tab2", label: "OPTIONS", content: <div> hi</div> },
  ];
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
