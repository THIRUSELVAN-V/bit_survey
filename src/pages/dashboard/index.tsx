import React from "react";
import {
  NoSurveyCard,
  SurveyCard,
  SurveyOption,
  TabBar,
} from "../../components";
import { PlusShield, ShieldIcon } from "../../assets";
import {surveyCardsData} from "./utils"
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

  const [activeTab, setActiveTab] = React.useState("tab1");

  const renderSurveyCards = (filterStatus:string[] |null) => {
    const filteredData = filterStatus
      ? surveyCardsData.filter((card) => filterStatus.includes(card.surveyStatus))
      : surveyCardsData;
  
    return (
      <div className="grid grid-cols-3 pt-5 gap-14">
        {filteredData.map((card) => (
          <SurveyCard
            key={card.id} // Add key for better React performance
            date={card.date}
            surveyName={card.surveyName}
            createdBy={card.createdBy}
            surveyStatus={card.surveyStatus as any}
            totalResponse={card.totalResponse}
            totalMembers={card.totalMembers}
          />
        ))}
      </div>
    );
  };
  
  const tabs = [
    { id: "tab1", label: "Live", content: renderSurveyCards(["Live","Created"]) },
    { id: "tab2", label: "Scheduled", content: renderSurveyCards(["Scheduled"]) },
    { id: "tab3", label: "Draft", content: renderSurveyCards(["Draft"]) },
    { id: "tab4", label: "All surveys", content: renderSurveyCards(null) }, 
    { id: "tab5", label: "Completed", content: renderSurveyCards(["Completed"]) },
    { id: "tab6", label: "Group surveys", content: renderSurveyCards(["Group surveys"]) },
  ];
  
  
   return (
    <div className="bg-background min-h-full rounded-3xl px-4 py-8">
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
            <div className="">
              <TabBar
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab} // Custom color for selected tabs
                color="primary"
                tablistClassName="gap-7 border-content1-1003"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
