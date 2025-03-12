import React from "react";
import { BulkAnswers, Chip, LoginComp, NumberInputComp, QuestionDisplay, SelectInput, SideBar, SurveyCard, SurveyOption, TableSurvey, TextAreaComp } from "../../components"
import { TabBar } from "../../components/switchTab";
import { PlusShield } from "../../assets/plusShield";
import { PreviewModel } from "../../components/PreviewModel";
import Login from "../login";



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
    <div className="bg-background h-full rounded-md">
      {/* <Chip
        label="Primary Chip"
        chipVariant="primary"
        radius="md" // Custom border radius
        baseClassName="px-5 py-1"
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

      {/* <SideBar /> */}
{/* <div className="w-[35vh]">
      <SurveyOption
        iconBgColor="bg-primary-600"
        icon={<PlusShield/>}
        title="Create survey"
        description="Explore new paths"
        // onClick={handleClick} // Optional
      />
</div>  */}

{/* <TextAreaComp 
className='border-2 border-gray-200 px-3 py-2'
placeholder='Add each question and answer choice on its own line. Press enter on your keyboard twice to separate each question.

For Example:

What is your favorite color?
Blue
Orange
Green


What is your favorite shape?
Circle
Triangle
Square
Hexagon'
/> */}

{/* <PreviewModel/> */}

{/* <BulkAnswers/> */}

{/* <LoginComp/> */}

    </div>
  )
}
