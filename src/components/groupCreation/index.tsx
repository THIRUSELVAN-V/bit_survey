import React, { useEffect } from 'react';
import { ButtonComponent, Chip, IconButtonComponent, IconButtonWithText, Modals, NoGroupCreationCard, StudentFilter, TableSurvey, } from '..';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { Divider, NumberInput } from '@heroui/react';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';
import { IoClose } from 'react-icons/io5';
import { RpIcon } from '../../assets';
import { useGroupStore, useRoleStore, useSkillStore } from '../../store/group';
import { columns, Response, users } from '../../pages/Response';

interface SpecificationListProps {
    id: number;
    name: string;
    skillLevels?:any;
}

interface GroupCreationProps{
    onClose?: () => void;
    filterGroup?:string[] | [];
    setFilterGroup:(val:any)=>void;
    rpAboveValue:number | null;
    rpBelowValue:number | null;
    setRpBelowValue?: (val:number | null) =>void;
    setRpAboveValue?: (val:number | null) =>void;
    handleGroupCreationSubmit?:()=>void;
}

export const GroupCreation = ({
    onClose = () => false,
    filterGroup,
    setFilterGroup = () =>false,
    rpAboveValue,
    rpBelowValue,
    setRpBelowValue =() => false,
    setRpAboveValue =() => false,
    handleGroupCreationSubmit=() =>false,
}:GroupCreationProps) => {
    const [selectedGroupType, setSelectedGroupType] = React.useState<string | null>(null);
    const [specificationList, setSpecificationList] = React.useState<SpecificationListProps[] | undefined>([]);
    const [levelList, setLevelList] = React.useState<string[] | undefined>([]);

    const [groupCreation, setGroupCreation] = React.useState(false);
    
    const [selectedSpecification, setSelectedSpecification] = React.useState<string | null>(null);
    const [selectedLevel, setSelectedLevel] = React.useState<string | null>(null); // Track selected level
    const [error, setError] = React.useState<string>("");
    const handleSetConditionClick = () => setGroupCreation(true);
    const role=useRoleStore((state)=>state.initialRole)
    const { getRolefromBackend, resetRole, selectRoleWithLevel, removeSelectedRole, filteredRole } = useRoleStore((state) => state)
    const skill = useSkillStore((state) => state.initial_skill)
    const { getSkillfromBackend, resetSkill,selectSkillWithLevel, removeSelectedSkill,selectedSkills } = useSkillStore((state) => state)
    const { getGroupStudent, minRp, maxRp, groupStudent, getMaxRp, getMinRp, openGroupStudentpopup, toogleGroupStudentpopup } = useGroupStore((state)=>state)
    // const filteredSkill=useSkillStore((state) => state.filteredSkill)
    // const filteredRole = useRoleStore((state) => state.filteredRole)
    useEffect(()=>{
        getRolefromBackend()
        getSkillfromBackend()
    },[])
    const handleGroupTypeClick = (value: SpecificationListProps[] | undefined, groupType: string) => {
        setSpecificationList(value);
        setLevelList([]); // Reset level list
        setSelectedSpecification(null); // Reset selected specification
        setSelectedLevel(null); // Reset selected level
        setSelectedGroupType(groupType); // Set the selected group type
    };
    const handleSpecificationClick = (specification: string, levels: string[] | undefined) => {
        setSelectedSpecification(specification); // Set selected specification
        setSelectedLevel(null); // Reset selected level
        setLevelList(levels);
    };

    const handleFilterGroup = (specification: any, level?: any) => {
        const newGroup = level ? `${specification} ${level.level}` : specification;
      
        const temp = { skillId: level?.id, name: newGroup }
        if(level?.skillId){
            selectSkillWithLevel(specification, level) 
            setFilterGroup((prev: any) =>
                prev.some((pre: any) => pre.name === temp.name) ? prev : [...prev, temp]
            );
        }
        else{
            console.log(specification)
            selectRoleWithLevel(specification)
            setFilterGroup((prev: any) =>
                prev.some((pre: any) => pre.name === specification?.name) ? prev : [...prev, newGroup]
            );
        }
    };
    // const [openGroupStudentpopup, setOpenGroupStudentpopup] =
    //     React.useState(false);

   
    const handleCloseGroupStudentpopup = () => {
        toogleGroupStudentpopup();
    };
    useEffect(()=>{
        console.log(selectedSkills)
        console.log(filteredRole)
    }, [selectedSkills, filteredRole])
    const handleRemoveFilterGroup = (group: any) => {
        console.log(group)
        if(group.skillId)
        {

            removeSelectedSkill(group.skillId)
        }
        else{
            removeSelectedRole(group.id)
        }
        setFilterGroup((prev:any) => prev.filter((item:any) => item !== group));
    };
    const handleSubmit = () => {

        getGroupStudent()
        handleGroupCreationSubmit()
        toogleGroupStudentpopup()
    };
    const handleClose = () => {
        setGroupCreation(false);
        setSpecificationList([]); // Reset specification list
        setLevelList([]); // Reset level list
        setFilterGroup([]); // Reset selected filters
        setSelectedSpecification(null); // Reset selected specification
        setSelectedLevel(null); // Reset selected level
        setSelectedGroupType(null); // Reset selected group type
        setRpAboveValue(null); // Reset Above value
        setRpBelowValue(null); // Reset Below value
        setError(""); // Clear error
    };
  
    const groupData = [
        {
            id: 1,
            groupType: 'Skills',
            icon: <MdOutlineWorkOutline size={27} className="text-content1-400" />,
            color: 'text-content1-400',
            selectedBorder:"border-primary",
            specifications:skill,
        },
        {
            id: 2,
            groupType: 'RP',
            icon: <RpIcon />,
            color: 'text-warning-200',
            selectedBorder:"border-warning-100"
        },
        {
            id: 3,
            groupType: 'Roles',
            icon: <BsPerson size={27} className="text-content1-500" />,
            color: 'text-content1-500',
            specifications: role,
            selectedBorder:"border-content1-500"
        },
    ];



    return (
        <div className="bg-background h-full rounded-md  flex flex-col ">
            <div className="flex items-center pt-[1.125rem] px-7 justify-between">
                <h3 className="font-bold text-lg text-content2-400">Group Creation</h3>
                <IconButtonComponent
                    border="none"
                    buttonIcon={<IoMdCloseCircleOutline size={25} className="text-red-500" />}
                    btnClassName="p-3 rounded-full"
                    handleOnClick={onClose}
                />
            </div>
            <Divider className="" />

            {!groupCreation && (
                <div className="flex justify-center items-center h-full">
                    <NoGroupCreationCard onButtonClick={handleSetConditionClick} />
                </div>
            )}

            {groupCreation && (
                <div className='h-full flex flex-col px-7 py-6'>
                    <div className="flex  gap-[1.375rem] ">
                        {groupData.map((item) => (
                            <IconButtonWithText
                                key={item.id}
                                icon={item.icon}
                                text={item.groupType}
                                color={item.color}
                                isSelected={selectedGroupType===item.groupType}
                                selectedBorder={item.selectedBorder}
                                handleOnClick={() => handleGroupTypeClick(item.specifications, item.groupType)}
                            />
                        ))}
                    </div>

                    <div className='sm:flex justify-between pt-[1.375rem] h-full'>
                        <div>
                    {/* Render Skills specifications */}
                    {specificationList && selectedGroupType === 'Skills' && (
                        <div className="flex flex-wrap  gap-[0.625rem]">
                            {specificationList.map((item) => (
                                <Chip
                                    key={item.id}
                                    label={item.name }
                                    startContent={
                                        <GoDotFill
                                            className={`${selectedSpecification === item.name ? 'text-[#005840]' : 'text-[#7A5AF8]'}`}
                                        />
                                    }
                                    baseClassName={`bg-primary-400 border ${selectedSpecification === item.name ? 'border-content1-1006 text-content1-1006' : 'border-content1-400 text-content1-400'
                                        } px-3 py-[0.875rem]`}
                                    textClassName="font-semibold uppercase text-[14px]"
                                    onClick={() => handleSpecificationClick(item.name, item.skillLevels)}
                                />
                            ))}
                        </div>
                    )}

                    {specificationList && selectedGroupType === 'Roles' && (
                        <div className="flex flex-wrap gap-[0.625rem] ">
                            {specificationList.map((item:any) => (
                                <Chip
                                    key={item.id}
                                    label={item.name}
                                    startContent={<GoDotFill className={`${selectedSpecification === item.name ? 'text-[#005840]' : 'text-[#7A5AF8]'}`} />}
                                    baseClassName={`bg-primary-400  ${selectedSpecification === item.name ? 'border-content1-1006 text-content1-1006' : 'border-content1-400 text-content1-400'
                                        } border-content1-400 border px-3 py-[0.875rem]`}
                                    textClassName="text-content1-400 font-semibold uppercase text-[14px]"
                                    onClick={() => handleFilterGroup(item)}
                                />
                            ))}
                        </div>
                    )}

                    {/* Render Levels for Skills */}
                    {levelList && selectedSpecification && selectedGroupType === 'Skills' && (
                        <div className="flex flex-wrap gap-[1.375rem] pt-6">
                            {levelList.map((level:any) => (
                                <Chip
                                    key={level.level}
                                    label={'level '+level.level}
                                    baseClassName={`bg-background border ${selectedLevel === level.level ? 'border-[#005840] text-[#005840]' : 'border-content2-900 text-content2-400'
                                        } rounded-md px-3 py-4`}
                                    textClassName="font-semibold text-[14px]"
                                    onClick={() => {
                                        handleFilterGroup(selectedSpecification, level);
                                        setSelectedLevel(level); // Set the selected level
                                    }}
                                />
                            ))}
                        </div>
                    )}

                    {/* Render RP NumberInputs */}
                    {selectedGroupType === 'RP' && (
                        <div className="flex flex-wrap gap-8 pt-5">
                            <div className="w-full sm:w-[230px]">
                                <p className="font-semibold text-content2-1001 pb-[6px]">Above</p>
                                <NumberInput 
                                value={minRp}  
                                    placeholder="Enter Points"
                                    onValueChange={ getMinRp}
                                    aria-label="Enter Above Points"
                                    variant='bordered'
                                />
                            </div>
                            <div className="w-full sm:w-[230px]">
                                <p className="font-semibold text-content2-1001 pb-[6px]">Below</p>
                                <NumberInput
                                value={maxRp || 0}
                                    placeholder="Enter Points"
                                    onValueChange={getMaxRp}
                                    aria-label="Enter Below Points"
                                    variant='bordered'
                                />
                            </div>
                            {/* Display error message if validation fails */}
                            {error && (
                                <p className="text-red-500 text-sm mt-2 w-full">
                                    {error}
                                </p>
                            )}
                        </div>
                    )}
                    </div>

                    {/* Selected Filters Box */}
                    {filterGroup && filterGroup.length > 0 && (
                        <div className="w-full  sm:w-[300px] self-end bg-background border border-content1-300 rounded-lg  p-4 mt-4 sm:mt-0 h-full  ">
                            <div className="flex flex-col gap-3">
                                {filterGroup?.map((group:any) => (
                                    <Chip
                                        key={group.name}
                                        label={group.name}
                                        startContent={<GoDotFill className="text-content1-1006" />}
                                        isCloseable
                                        endContent={<IoClose size={20} className="text-[#FB3748]" />}
                                        baseClassName="bg-primary-400 border-content1-1006 border px-2 py-3"
                                        textClassName="text-content1-1006 font-semibold uppercase text-[14px]"
                                        onClose={() => handleRemoveFilterGroup(group)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                    </div>

                    {/* Footer with Divider and Submit Button */}
                    <div className="mt-auto">
                        <Divider className="w-full" />
                        <div className="flex justify-end items-center pt-4 gap-10">
                            {/* Deselect All */}
                            <p
                                className="text-danger-600 font-regular text-base cursor-pointer hover:underline"
                                onClick={() => {setFilterGroup([])
                                    resetRole()
                                    resetSkill()
                                    
                                }} // Clear all selected filters
                            >
                                Deselect All
                            </p>

                            {/* Selected Count */}
                            <p className="text-content1-500 font-medium text-base">
                                Selected {filterGroup?.length}
                            </p>

                            {/* Submit Button */}
                            <ButtonComponent
                                ButtonVariant="solid"
                                buttonText="Show results"
                                isIcon={false}
                                bgColor="bg-primary"
                                textClassName="text-background font-semibold text-[1rem]"
                                baseClassName="border-none w-full sm:w-[200px] bg-primary hover:!bg-primary data-[hover=true]:!bg-primary"
                                handleOnClick={handleSubmit}
                            />
                        </div>
                    </div>
                     <Modals
                        
                            ModalContents={
                            <StudentFilter handleCloseGroupStudentpopup={handleCloseGroupStudentpopup} filterGroup={filterGroup} data={groupStudent}/>
                            }
                            // ModalFooterContent={<div></div>}
                        isopen={openGroupStudentpopup}
                            onClose={handleCloseGroupStudentpopup}
                            hideCloseButton
                            bodyClassName="p-0"
                            modalClassName="h-[100%] overflow-y-auto  scrollbar-hide sm:my-0 w-[45%]"
                          />
                </div>
            )}
        </div>
    );
};
