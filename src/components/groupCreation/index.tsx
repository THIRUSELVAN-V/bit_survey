import React from 'react';
import { ButtonComponent, Chip, IconButtonComponent, IconButtonWithText, NoGroupCreationCard, } from '..';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { Divider, NumberInput } from '@heroui/react';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';
import { IoClose } from 'react-icons/io5';
import { RpIcon } from '../../assets';

interface SpecificationListProps {
    id: number;
    name: string;
    level?: string[];
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

    const handleGroupTypeClick = (value: SpecificationListProps[] | undefined, groupType: string) => {
        setFilterGroup([]); // Reset filterGroup
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

    const handleFilterGroup = (specification: string, level?: string) => {
        const newGroup = level ? `${specification} ${level}` : specification;
        setFilterGroup((prev:any) => (prev.includes(newGroup) ? prev : [...prev, newGroup]));
    };

    const handleRemoveFilterGroup = (group: string) => {
        setFilterGroup((prev:any) => prev.filter((item:any) => item !== group));
    };

    const handleSubmit = () => {
        handleGroupCreationSubmit()
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
            specifications: [
                { id: 1, name: 'C PROGRAMMING', level: ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6','Level 7'] },
                { id: 2, name: 'PYTHON', level: ['Level 1', 'Level 2', 'Level 3', 'Level 4'] },
                { id: 3, name: 'SQL', level: ['Level 1'] },
                { id: 4, name: 'PROBLEM SOLVING', level: ['Level 1'] },
                { id: 5, name: 'JAVA', level: ['Level 1', 'Level 2', 'Level 3'] },
                { id: 6, name: 'UI/UX', level: ['Level 1', 'Level 2', 'Level 3'] },
                { id: 7, name: 'APTITUDE', level: ['Level 1A', 'Level 1B', 'Level 1C', 'Level 1D'] },
            ],
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
            specifications: [
                { id: 1, name: 'Students' }, 
                { id: 2, name: 'Faculty' }, 
                { id: 3, name: 'Lab incharges' }, 
                { id: 4, name: 'student affairs' }, 
                { id: 5, name: 'M-team' },
            ],
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

                    <div className='sm:flex pt-[1.375rem] h-full'>
                        <div>
                    {/* Render Skills specifications */}
                    {specificationList && selectedGroupType === 'Skills' && (
                        <div className="flex flex-wrap  gap-[0.625rem]">
                            {specificationList.map((item) => (
                                <Chip
                                    key={item.id}
                                    label={item.name}
                                    startContent={
                                        <GoDotFill
                                            className={`${selectedSpecification === item.name ? 'text-[#005840]' : 'text-[#7A5AF8]'}`}
                                        />
                                    }
                                    baseClassName={`bg-primary-400 border ${selectedSpecification === item.name ? 'border-content1-1006 text-content1-1006' : 'border-content1-400 text-content1-400'
                                        } px-3 py-[0.875rem]`}
                                    textClassName="font-semibold uppercase text-[14px]"
                                    onClick={() => handleSpecificationClick(item.name, item.level)}
                                />
                            ))}
                        </div>
                    )}

                    {specificationList && selectedGroupType === 'Roles' && (
                        <div className="flex flex-wrap gap-[0.625rem] ">
                            {specificationList.map((item) => (
                                <Chip
                                    key={item.id}
                                    label={item.name}
                                    startContent={<GoDotFill className={`${selectedSpecification === item.name ? 'text-[#005840]' : 'text-[#7A5AF8]'}`} />}
                                    baseClassName={`bg-primary-400  ${selectedSpecification === item.name ? 'border-content1-1006 text-content1-1006' : 'border-content1-400 text-content1-400'
                                        } border-content1-400 border px-3 py-[0.875rem]`}
                                    textClassName="text-content1-400 font-semibold uppercase text-[14px]"
                                    onClick={() => handleFilterGroup(item.name)}
                                />
                            ))}
                        </div>
                    )}

                    {/* Render Levels for Skills */}
                    {levelList && selectedSpecification && selectedGroupType === 'Skills' && (
                        <div className="flex flex-wrap gap-[1.375rem] pt-6">
                            {levelList.map((level) => (
                                <Chip
                                    key={level}
                                    label={level}
                                    baseClassName={`bg-background border ${selectedLevel === level ? 'border-[#005840] text-[#005840]' : 'border-content2-900 text-content2-400'
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
                                <NumberInput                                    placeholder="Enter Points"
                                    onValueChange={ setRpAboveValue}
                                    aria-label="Enter Above Points"
                                    variant='bordered'
                                />
                            </div>
                            <div className="w-full sm:w-[230px]">
                                <p className="font-semibold text-content2-1001 pb-[6px]">Below</p>
                                <NumberInput
                                    placeholder="Enter Points"
                                    onValueChange={setRpBelowValue}
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
                        <div className="w-full  sm:w-[300px] sm:self-end bg-background border border-content1-300 rounded-lg  p-4 mt-4 sm:mt-0 h-full  ">
                            <div className="flex flex-col gap-3">
                                {filterGroup?.map((group) => (
                                    <Chip
                                        key={group}
                                        label={group}
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
                                onClick={() => setFilterGroup([])} // Clear all selected filters
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
                                baseClassName="border-none w-full sm:w-[200px]"
                                handleOnClick={handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
