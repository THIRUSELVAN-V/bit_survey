import { MdOutlineSchool } from "react-icons/md";
import { PredefindTemplateCard } from "../../components";
import { TbSettingsBolt } from "react-icons/tb";
export const Templates = () => {
  const PredefindTemplateCardData = [
    {
      id: 1,
      icon: <MdOutlineSchool size={24} className="text-content1-900" />,
      title: "Assets",
      description:
        "This template allows users to create structured product-related survey questions efficiently. It includes predefined question formats",
    },
    {
      id: 2,
      icon: <TbSettingsBolt size={24} className="text-content1-900" />,
      title: "Skill feedback",
      description:
        "Gather valuable insights to enhance the academic experience through targeted feedback from students and faculty",
    },
    {
      id: 3,
      icon: <MdOutlineSchool size={24} className="text-content1-900" />,
      title: "Academic feedback",
      description:
        "This template allows users to create structured product-related survey questions efficiently. It includes predefined question formats",
    },
    {
      id: 4,
      icon: <TbSettingsBolt size={24} className="text-content1-900" />,
      title: "Skill feedback",
      description:
        "This template allows users to create structured product-related survey questions efficiently. It includes predefined question formats",
    },
    {
      id: 5,
      icon: <MdOutlineSchool size={24} className="text-content1-900" />,
      title: "Academic feedback",
      description:
        "This template allows users to create structured product-related survey questions efficiently. It includes predefined question formats",
    },
    {
      id: 6,
      icon: <TbSettingsBolt size={24} className="text-content1-900" />,
      title: "Skill feedback",
      description:
        "This template allows users to create structured product-related survey questions efficiently. It includes predefined question formats",
    },
  ];
  return (
    <div className="bg-background min-h-full rounded-3xl px-4 py-8 ">
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-10">
        {PredefindTemplateCardData.map((item) => (
          <div key={item.id}>
            <PredefindTemplateCard
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
