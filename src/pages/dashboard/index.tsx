import React, { useEffect } from "react";
import {
  ComonPopup,
  Modals,
  NoSurveyCard,
  SurveyCard,
  SurveyOption,
  TabBar,
  GroupCreation
} from "../../components";
import { FeaturedTickIcon, PlusShield, ShieldIcon } from "../../assets";
import { surveyCardsData } from "./utils";
import { useNavigate } from "react-router-dom";
import { getRequest } from "../../util/axios";
import { useSkillStore } from "../../store/group";
export const Dashboard = () => {
  const [isSurvey, setIsSurvey] = React.useState(true);

  const [filterGroup, setFilterGroup] = React.useState([]);
  const [rpBelowValue, setRpBelowValue] = React.useState<number | null>(null);
  const [rpAboveValue, setRpAboveValue] = React.useState<number | null>(null);
  const skillbackend = useSkillStore((state) => state.getSkillfromBackend)
  const navigate = useNavigate();

  const handleGroupCreationSubmit = () => {
    console.log("Above:", rpAboveValue, "Below:", rpBelowValue);
    console.log("hiiiii", "Selected Filters:", filterGroup);
  };

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
  useEffect(() => {
    skillbackend();
      }, []);

  const [activeTab, setActiveTab] = React.useState("tab1");

  const renderSurveyCards = (filterStatus: string[] | null) => {
    const filteredData = filterStatus
      ? surveyCardsData.filter((card) =>
          filterStatus.includes(card.surveyStatus)
        )
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
    {
      id: "tab1",
      label: "Live",
      content: renderSurveyCards(["Live", "Created"]),
    },
    {
      id: "tab2",
      label: "Scheduled",
      content: renderSurveyCards(["Scheduled"]),
    },
    { id: "tab3", label: "Draft", content: renderSurveyCards(["Draft"]) },
    { id: "tab4", label: "All surveys", content: renderSurveyCards(null) },
    {
      id: "tab5",
      label: "Completed",
      content: renderSurveyCards(["Completed"]),
    },
    {
      id: "tab6",
      label: "Group surveys",
      content: renderSurveyCards(["Group surveys"]),
    },
  ];

  const handleSurveyOptionClick = (val: string) => {
    if (val === "Templates") {
      navigate("templates");
    }
    if (val === "Create groups") {
      console.log("clik");
      handleOpenGroupCreationpopup();
    }
    if(val==="Create survey"){
      navigate("surveyCreation");
    }
  };

  const [openGroupCreationpopup, setOpenGroupCreationpopup] =
    React.useState(false);
  const [openNewSurveyPopup, setOpenNewSurveyPopup] = React.useState(false);
  const handleOpenGroupCreationpopup = () => {
    setOpenGroupCreationpopup(true);
  };
  const handleCloseGroupCreationpopup = () => {
    setOpenGroupCreationpopup(false);
  };
  const handleOpenNewSurveyPopup = () => {
    setOpenNewSurveyPopup(true);
  };
  const handleCloseNewSurveyPopup = () => {
    setOpenNewSurveyPopup(false);
  };

  return (
    <div
      className={`bg-background ${
        isSurvey ? "min-h-full" : "h-full"
      } rounded-3xl px-4 py-8`}
    >
      {!isSurvey && <NoSurveyCard onButtonClick={handleOpenNewSurveyPopup} />}
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
                    onClick={() => handleSurveyOptionClick(item.title)}
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
      <Modals
        isopen={openNewSurveyPopup}
        onClose={handleCloseNewSurveyPopup}
        hideCloseButton
        ModalContents={
          <div className="">
          <ComonPopup
            icon={<FeaturedTickIcon />}
            bodyContent={
              <p className="font-semibold text-[19px] text-content2-100">
                Choose your choice
              </p>
            }
            button1Text="templates"
            button2Text="Create new"
            onButton1Click={()=>navigate("/templates")}
            onButton2Click={()=>navigate("/surveyCreation")}
          />
          </div>
        }
        bodyClassName="p-0"
        size="lg"
        modalClassName="h-[13.75rem] overflow-y-auto  scrollbar-hide sm:my-0 w-[25rem]"
      />
      <Modals
        ModalContents={
          <div className="h-full  ">
            <GroupCreation
              filterGroup={filterGroup}
              onClose={handleCloseGroupCreationpopup}
              setFilterGroup={setFilterGroup}
              rpAboveValue={rpAboveValue}
              rpBelowValue={rpBelowValue}
              setRpBelowValue={setRpBelowValue}
              setRpAboveValue={setRpAboveValue}
              handleGroupCreationSubmit={handleGroupCreationSubmit}
            />
          </div>
        }
        // ModalFooterContent={<div></div>}
        isopen={openGroupCreationpopup}
        onClose={handleCloseGroupCreationpopup}
        hideCloseButton
        bodyClassName="p-0"
        modalClassName="h-[90%] overflow-y-auto  scrollbar-hide sm:my-0 w-[45%]"
      />
    </div>
  );
};
