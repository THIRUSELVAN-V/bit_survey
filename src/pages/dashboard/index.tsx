import React from "react";
import { NoSurveyCard, SurveyOption, TabBar } from "../../components";
import { PlusShield, ShieldIcon } from "../../assets";

export const Dashboard = () => {
  const [isSurvey, setIsSurvey] = React.useState(true);
  const surveyOptionDatd = [
    {
      id: 1,
      iconBgColor: "bg-primary-600",
      icon: <PlusShield />,
      title: "Create survey",
      description: "Explore new paths",
    },
    {
      id: 2,
      iconBgColor: "bg-content1-800",
      icon: <ShieldIcon />,
      title: "Templates",
      description: "Create from existed",
    },
    {
      id: 3,
      iconBgColor: "bg-primary-600",
      icon: <PlusShield />,
      title: "Create groups",
      description: "Add members",
    },
  ];

  const [activeTab, setActiveTab] = React.useState('tab1');

  const tabs = [
    {
      id: 'tab1',
      label: 'Live',
      content: <div>This is the content for Tab 1.</div>,
    },
    {
      id: 'tab2',
      label: 'Scheduled',
      content: <div>This is the content for Tab 2.</div>,
    },
    {
      id: 'tab3',
      label: 'Draft',
      content: <div>This is the content for Tab 3.</div>,
    },
    {
      id: 'tab4',
      label: 'All surveys ',
      content: <div>This is the content for Tab 4.</div>,
    },
    {
      id: 'tab5',
      label: 'Completed',
      content: <div>This is the content for Tab 4.</div>,
    },
    {
      id: 'tab6',
      label: 'Group surveys',
      content: <div>This is the content for Tab 4.</div>,
    },
  ];
  return (
    <div className="bg-background h-full rounded-3xl px-4 py-8">
      {!isSurvey && <NoSurveyCard />}
      <div>
        {isSurvey && (
          <div>
            <div className="grid grid-cols-11 gap-7">
              {surveyOptionDatd.map((item) => (
                <div className="col-span-3" key={item.id}>
                  <SurveyOption
                    
                    iconBgColor={item.iconBgColor}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
            <TabBar
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab} // Custom color for selected tabs
                color="primary"
            />
          </div>
        )}
      </div>
    </div>
  );
};
