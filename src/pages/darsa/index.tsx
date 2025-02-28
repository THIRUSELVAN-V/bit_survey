import React from "react";
import { Chip, NumberInputComp, ProgressComp, SelectInput, SideBar, SurveyOption } from "../../components"
import { TabBar } from "../../components/switchTab";
import { NumberInput } from "@heroui/react";



export const Darsa = () => {

  const [activeTab, setActiveTab] = React.useState('tab1');

  const tabs = [
    {
      id: 'tab1',
      label: 'Overall response status',
      content: <div>This is the content for Tab 1.</div>,
    },
    {
      id: 'tab2',
      label: 'Completed',
      content: <div>This is the content for Tab 2.</div>,
    },
    {
      id: 'tab3',
      label: 'Not Completed',
      content: <div>This is the content for Tab 3.</div>,
    },
    {
      id: 'tab4',
      label: 'Overall Statistics',
      content: <div>This is the content for Tab 4.</div>,
    },
  ];

  const questionType = [
    { key: "multi", label: "Multiple Choice" },
    { key: "single", label: "Single Choice" },
    { key: "matrix", label: "Matrix Type" },
  ];

  return (
    <div>
      {/* <Chip
        label="Completed"
        borderColor="border-[#1FC16B]"
      />
       <TabBar
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                normalTabColor="text-gray-700" // Custom color for normal tabs
                selectedTabColor="primary-500" // Custom color for selected tabs
                borderColor="primary-500"
            />

<SelectInput
        options={questionType}
        placeholder="Select Question Type"
        className="max-w-xs rounded-none"
      />

<NumberInputComp
        label="Enter Points"
        placeholder="Enter Points"
        isLabelVisible={false}
      />

<ProgressComp
        value={70}
        size="lg"
        color="bg-purple-500"
        outlineColor="border-purple-300"
        label="Processing..."
      /> */}

      {/* <SideBar /> */}

      <SurveyOption/>

    </div>
  )
}
