import React from "react";
import { Chip, NumberInputComp, ProgressComp, SelectInput, SideBar, SurveyCard, SurveyOption } from "../../components"
import { TabBar } from "../../components/switchTab";
import { PlusShield } from "../../assets/plusShield";



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
      <Chip
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
<div className="w-[35vh]">
      <SurveyOption
        iconBgColor="bg-primary-600"
        icon={<PlusShield/>}
        title="Create survey"
        description="Explore new paths"
        // onClick={handleClick} // Optional
      />
</div>

      <div className="w-[55vh]">
        <SurveyCard
          // chip
          chipLabel="Completed"
          chipVariant="primary"
          chipBaseClassName="bg-warning-200 rounded-md "
          chipTextClassName="text-warning-100 py-2 font-medium text-sm"
          // Header
          subtitle="Survey Subtitle"
          description="This is a description of the survey."
          //progress
          progressValue={100}
          progressLabel="Progress"
          progressClassName="bg-primary-600"

          //avatar
          avatarUrls={['url1', 'url2', 'url3']}
          responseCount={99}
          //button
          buttonText="View"
          //card
          bgColor="#F5F8FE"
          textColor="text-gray-800"
        />
      </div>
    </div>
  )
}
