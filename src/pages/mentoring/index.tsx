import React from 'react'
import { SurveyCard, TabBar } from '../../components';
import {surveyCardsData} from "./utils"
export const Mentoring = () => {
  
      const [activeTab, setActiveTab] = React.useState("tab1");
      
      const renderSurveyCards = (filterStatus:string[] |null) => {
          const filteredData = filterStatus
            ? surveyCardsData.filter((card) => filterStatus.includes(card.surveyStatus))
            : surveyCardsData;
        
          return (
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 pt-5 gap-14">
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
          { id: "tab1", label: "Live", content: renderSurveyCards(["MentoringLiveCard"]) },
          { id: "tab5", label: "Completed", content: renderSurveyCards(["MentoringCompletedCard"]) },
        ];
    return (
      <div className="bg-background min-h-full rounded-3xl px-4 py-8 ">
        <TabBar
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab} // Custom color for selected tabs
          color="primary"
          tablistClassName="gap-16 border-content1-1003"
        />
      </div>
    );
}