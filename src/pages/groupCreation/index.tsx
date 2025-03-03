import React from 'react';
import { ButtonComponent, Chip, IconButtonComponent, IconButtonWithText, NoGroupCreationCard, NumberInputComp } from '../../components';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { Divider, NumberInput } from '@heroui/react';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';
import { IoClose } from 'react-icons/io5';

interface SpecificationListProps {
    id: number;
    name: string;
    level?: string[];
}

export const GroupCreation = () => {
    const [groupCreation, setGroupCreation] = React.useState(false);
    const [specificationList, setSpecificationList] = React.useState<SpecificationListProps[] | undefined>([]);
    const [levelList, setLevelList] = React.useState<string[] | undefined>([]);
    const [filterGroup, setFilterGroup] = React.useState<string[]>([]);
    const [selectedSpecification, setSelectedSpecification] = React.useState<string | null>(null);
    const [selectedLevel, setSelectedLevel] = React.useState<string | null>(null); // Track selected level
    const [selectedGroupType, setSelectedGroupType] = React.useState<string | null>(null);
    const [aboveValue, setAboveValue] = React.useState<number | null>(null);
    const [belowValue, setBelowValue] = React.useState<number | null>(null);
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
        setFilterGroup((prev) => (prev.includes(newGroup) ? prev : [...prev, newGroup]));
    };

    const handleRemoveFilterGroup = (group: string) => {
        setFilterGroup((prev) => prev.filter((item) => item !== group));
    };

    const handleSubmit = () => {
        if (selectedGroupType === 'RP') {
            if (aboveValue === null || belowValue === null) {
                setError("Please enter values for both Above and Below.");
                return;
            }
            if (belowValue <= aboveValue) {
                setError("Below value must be greater than Above value.");
                return;
            }
            setError("");
            console.log("Above:", aboveValue, "Below:", belowValue);
        }
        console.log("Selected Filters:", filterGroup);
    };

    const handleClose = () => {
        setGroupCreation(false);
        setSpecificationList([]); // Reset specification list
        setLevelList([]); // Reset level list
        setFilterGroup([]); // Reset selected filters
        setSelectedSpecification(null); // Reset selected specification
        setSelectedLevel(null); // Reset selected level
        setSelectedGroupType(null); // Reset selected group type
        setAboveValue(null); // Reset Above value
        setBelowValue(null); // Reset Below value
        setError(""); // Clear error
    };

    const groupData = [
        {
            id: 1,
            groupType: 'Skills',
            icon: <MdOutlineWorkOutline size={27} className="text-content1-400" />,
            color: 'text-content1-400',
            specifications: [
                { id: 1, name: 'C Programming', level: ['1', '2', '3', '4', '5', '6'] },
                { id: 2, name: 'Python', level: ['1', '2', '3', '4'] },
                { id: 3, name: 'Java', level: ['1', '2', '3', '4'] },
                { id: 4, name: 'SQL', level: ['1', '2', '3', '4'] },
            ],
        },
        {
            id: 2,
            groupType: 'RP',
            icon: <BsPerson size={27} className="text-warning-200" />,
            color: 'text-warning-200',
        },
        {
            id: 3,
            groupType: 'Roles',
            icon: <BsPerson size={27} className="text-content1-500" />,
            color: 'text-content1-500',
            specifications: [{ id: 1, name: 'Students' }, { id: 2, name: 'Faculty' }, { id: 3, name: 'M-team' }],
        },
    ];

    return (
        <div className="bg-background h-full rounded-md p-4 flex flex-col">
            <div className="flex items-center justify-between">
                <h3 className="font-semibold">Group Creation</h3>
                <IconButtonComponent
                    border="none"
                    buttonIcon={<IoMdCloseCircleOutline size={25} className="text-red-500" />}
                    btnClassName="p-3 rounded-full"
                    handleOnClick={handleClose}
                />
            </div>
            <Divider className="my-2" />

            {!groupCreation && (
                <div className="flex justify-center items-center h-full">
                    <NoGroupCreationCard onButtonClick={handleSetConditionClick} />
                </div>
            )}

            {groupCreation && (
                <>
                    <div className="flex flex-wrap gap-3 pt-4">
                        {groupData.map((item) => (
                            <IconButtonWithText
                                key={item.id}
                                icon={item.icon}
                                text={item.groupType}
                                color={item.color}
                                handleOnClick={() => handleGroupTypeClick(item.specifications, item.groupType)}
                            />
                        ))}
                    </div>

                    {/* Render Skills specifications */}
                    {specificationList && selectedGroupType === 'Skills' && (
                        <div className="flex flex-wrap gap-3 pt-4">
                            {specificationList.map((item) => (
                                <Chip
                                    key={item.id}
                                    label={item.name}
                                    startContent={
                                        <GoDotFill
                                            className={`${selectedSpecification === item.name ? 'text-[#005840]' : 'text-[#7A5AF8]'}`}
                                        />
                                    }
                                    baseClassName={`bg-primary-50 border ${selectedSpecification === item.name ? 'border-[#005840] text-[#005840]' : 'border-content1-400 text-content1-400'
                                        } px-2 py-1`}
                                    textClassName="font-semibold uppercase"
                                    onClick={() => handleSpecificationClick(item.name, item.level)}
                                />
                            ))}
                        </div>
                    )}

                    {specificationList && selectedGroupType === 'Roles' && (
                        <div className="flex flex-wrap gap-3 pt-4">
                            {specificationList.map((item) => (
                                <Chip
                                    key={item.id}
                                    label={item.name}
                                    startContent={<GoDotFill className={`${selectedSpecification === item.name ? 'text-[#005840]' : 'text-[#7A5AF8]'}`} />}
                                    baseClassName={`bg-primary-50  ${selectedSpecification === item.name ? 'border-[#005840] text-[#005840]' : 'border-content1-400 text-content1-400'
                                        } border-content1-400 border px-2 py-1`}
                                    textClassName="text-content1-400 font-semibold uppercase"
                                    onClick={() => handleFilterGroup(item.name)}
                                />
                            ))}
                        </div>
                    )}

                    {/* Render Levels for Skills */}
                    {levelList && selectedSpecification && selectedGroupType === 'Skills' && (
                        <div className="flex flex-wrap gap-3 pt-4">
                            {levelList.map((level) => (
                                <Chip
                                    key={level}
                                    label={`Level ${level}`}
                                    baseClassName={`bg-white border ${selectedLevel === level ? 'border-[#005840] text-[#005840]' : 'border-gray-300 text-gray-700'
                                        } rounded-md px-2 py-1`}
                                    textClassName="font-semibold"
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
                        <div className="flex flex-wrap gap-3 pt-4">
                            <div className="w-full sm:w-[230px]">
                                <p className="font-semibold text-[#6B778C]">Above</p>
                                <NumberInput                                    placeholder="Enter Points"
                                    onValueChange={ setAboveValue}
                                    aria-label="Enter Above Points"
                                />
                            </div>
                            <div className="w-full sm:w-[230px]">
                                <p className="font-semibold text-[#6B778C]">Below</p>
                                <NumberInput
                                    placeholder="Enter Points"
                                    onValueChange={setBelowValue}
                                    aria-label="Enter Below Points"
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

                    {/* Selected Filters Box */}
                    {filterGroup.length > 0 && (
                        <div className="w-full sm:w-[300px] sm:self-end bg-background border border-[#DBDBDB] rounded-lg p-4 mt-4 sm:mt-0 h-[17rem] mb-1">
                            <div className="flex flex-col gap-3">
                                {filterGroup.map((group) => (
                                    <Chip
                                        key={group}
                                        label={group}
                                        startContent={<GoDotFill className="text-[#005840]" />}
                                        isCloseable
                                        endContent={<IoClose size={20} className="text-[#FB3748]" />}
                                        baseClassName="bg-primary-50 border-[#005840] border px-2 py-1"
                                        textClassName="text-[#005840] font-semibold uppercase"
                                        onClose={() => handleRemoveFilterGroup(group)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Footer with Divider and Submit Button */}
                    <div className="mt-auto">
                        <Divider className="w-full" />
                        <div className="flex justify-end items-center pt-4 gap-10">
                            {/* Deselect All */}
                            <p
                                className="text-[#E70518] font-semibold cursor-pointer hover:underline"
                                onClick={() => setFilterGroup([])}
                            >
                                Deselect All
                            </p>

                            {/* Selected Count */}
                            <p className="text-[#1A79E6] font-semibold">
                                Selected {filterGroup.length}
                            </p>

                            {/* Submit Button */}
                            <ButtonComponent
                                ButtonVariant="solid"
                                buttonText="Submit"
                                isIcon={false}
                                bgColor="bg-primary"
                                textClassName="text-background font-semibold text-[1rem]"
                                baseClassName="border-none w-full sm:w-[200px]"
                                handleOnClick={handleSubmit}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};