import React from "react";
import { Chip, SelectInput } from "../../components"
import { TabBar } from "../../components/switchTab";



export const Darsa = () => {

  const [activeTab, setActiveTab] = React.useState('tab1');

  const tabs = [
    {
      id: 'tab1',
      label: 'Overall response status',
    },
    {
      id: 'tab2',
      label: 'Completed',
    },
    {
      id: 'tab3',
      label: 'Not Completed',
    },
    {
      id: 'tab4',
      label: 'Overall Statistics',
    },
  ];

  const questionType = [
    { key: "multi", label: "Multiple Choice" },
    { key: "single", label: "Single Choice" },
    { key: "matrix", label: "Matrix Type" },
  ];

  return (
    <div>
      <Chip
        label="Completed"
        borderColor="border-[#1FC16B]"
      />
      <TabBar
        id="my-tabs"
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        variant="underlined"
      />

<SelectInput
        options={questionType}
        placeholder="Select Question Type"
        className="max-w-xs rounded-none"
      />

    </div>
  )
}
