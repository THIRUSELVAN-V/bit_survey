import React, { useEffect } from 'react'
import { TableSurvey } from '../table'
import { useGroupStore } from '../../store/group';
import { IconButtonComponent } from '../iconButton';
import { TiArrowLeftThick } from 'react-icons/ti';
import { Chip } from '../chip';
import { SelectInput } from '../selectInput';
import { Modals } from '../modal';
import { Image } from '@heroui/react';
import Tick from '../../assets/FeaturedIcon.png'
import { ButtonComponent } from '../button';
import { GoDotFill } from 'react-icons/go';


export function StudentFilter({
    data,
    filterGroup,
    handleCloseGroupStudentpopup
}: any) {
    const [selected, setSelected] = React.useState<any>(null);
    const [selectedKeys, setSelectedKeys] = React.useState<any>(new Set([]));
    const [selectedDept, setSelectedDept] = React.useState<any>(null); // New state for department filter
    const { setGroupStudents, CreateGroup } = useGroupStore((state) => state)
    const [filteredData, setfilteredData] = React.useState<any>(data)
    const [createModel, setCreateModel] = React.useState(false)
    const modelClose = () => {
        setCreateModel(false)
    }
    const onCreateClick = () => {
        modelOpen()

    }
    const modelOpen = () => {
        setCreateModel(true)
    }
    // Filter data based on department and selected keys
    // const filteredData = selectedDept
    //     ? data.filter((item: any) => item.deptId === selectedDept)
    //     : data;
    //     console.log(selectedDept)


    // Effect to set the group students based on selected keys and department
    useEffect(() => {
        if (selectedKeys === 'all') {
            setGroupStudents(filteredData.map((item: any) => ({ "id": parseInt(item.id) })));
        } else {
            setGroupStudents([...selectedKeys].map((item: any) => ({ "id": parseInt(item) })));
        }
    }, [selectedKeys, selectedDept, filteredData]);
    useEffect(() => {
        if (selected != null) {
            // console.log(data[0].year)
            setfilteredData(data.filter((item: any) => item.year === parseInt(selected)))
        }
    }, [selected])
    useEffect(() => {
        if (selectedDept != null) {
            // console.log(data[0].year)
            setfilteredData(data.filter((item: any) => item.dept.id === parseInt(selectedDept)))
        }
    }, [selectedDept])
    useEffect(() => {
        setfilteredData(data)
    }, [data])


    return (
        <div className="h-full py-3 ">
            <div className='h-12 w-full flex items-center justify-between p-4'>
                <div className='flex items-center w-1/2 gap-2 font-semibold text-xl'>
                    <IconButtonComponent btnClassName='!min-w-10 !w-10 border-0 shadow-light-xll' handleOnClick={handleCloseGroupStudentpopup} buttonIcon={<TiArrowLeftThick className='w-6 h-6 font-regular' />} iconClassName='!w-5 !h-5' />
                    Group
                    <Chip label={`${filteredData.length} members`} baseClassName='bg-secondary-1000 mt-2' textClassName='text-secondary-900 text-sm font-semibold' />
                </div>
                <div className='flex gap-2 justify-end w-1/2'>
                    <div className='rounded-full'>
                        <SelectInput
                            className='w-[10rem] p-0 rounded-sm'
                            baseClassName='p-0 rounded-full '
                            listBoxClassName='p-0'
                            trigger=' min-h-10 h-10'
                            placeholder='Select the year'
                            selectOptions={[
                                { id: 1, label: "I" },
                                { id: 2, label: "II" },
                                { id: 3, label: "III" },
                                { id: 4, label: "IV" }
                            ]}
                            onSelectionChange={(value: any) => setSelected([...value][0])}
                            selectedKeys={selected}
                        />
                    </div>
                    <div className='rounded-full'>
                        <SelectInput
                            className='w-[10rem] p-0 rounded-sm'
                            baseClassName='p-0 rounded-full '
                            listBoxClassName='p-0'
                            trigger=' min-h-10 h-10'
                            placeholder='Select the depat'
                            selectOptions={[
                                { id: 1, label: "CSE" },
                                { id: 2, label: "IT" },
                                { id: 3, label: "SE" },
                                { id: 4, label: "ECE" }
                            ]}
                            onSelectionChange={(value: any) => setSelectedDept([...value][0])}
                            selectedKeys={selectedDept}
                        />
                    </div>
                </div>
            </div>
            <TableSurvey
                isSearch={false}
                isCreate={true}
                selectedKeys={selectedKeys}
                setSelectedKeys={setSelectedKeys}
                createfunction={onCreateClick}
                visibleColumn={["name", "Stay", "email"]}
                data={filteredData}
                columns={[
                    { name: "ID", uid: "id", sortable: true, value: 1 },
                    { name: "Name", uid: "name", sortable: true },
                    { name: "Role", uid: "role", sortable: true },
                    { name: "Stay", uid: "Stay", sortable: true },
                    { name: "TEAM", uid: "team", value: "Hostel" },
                    { name: "Email", uid: "email", value: "raj@gmail.com" },
                    { name: "ACTIONS", uid: "actions", value: "N/A" }
                ]}
            />
            <Modals
                ModalContents={
                    <div className='p-6 flex flex-col gap-3 justify-between'>
                        <Image
                            src={Tick}
                            width={50}
                            height={50}
                            alt="Picture of the author"
                        />
                        <div className='font-semibold text-xl'>Make sure your filter are correct</div>
                        <div>
                            {
                                filterGroup.map((group: any) => (
                                    <Chip
                                        key={group.name}
                                        label={group.name}
                                        startContent={<GoDotFill className="text-content1-1006" />}
                                        isCloseable
                                        baseClassName="bg-primary-400 border-content1-1006 border px-2 py-3"
                                        textClassName="text-content1-1006 font-semibold uppercase text-[14px]"
                                    />))
                            }
                        </div>
                        <div className='flex gap-2 w-full self-end'>
                            <ButtonComponent isIcon={false} handleOnClick={modelClose} baseClassName='!border-secondary-700 w-1/2 ' textClassName='text-base text-secondary-1001 ' buttonText='Cancel' />
                            <ButtonComponent isIcon={false} handleOnClick={()=>{
                                CreateGroup()
                                modelClose()
                            }} textClassName='text-base text-background' baseClassName='bg-primary w-1/2 !font-regular border-0 bg-primary hover:!bg-primary data-[hover=true]:!bg-primary' buttonText='Create' />

                        </div> </div>
                }
                // ModalFooterContent={<div></div>}
                isopen={createModel}
                onClose={modelClose}
                hideCloseButton
                bodyClassName="p-0"
                modalClassName=" overflow-y-auto  scrollbar-hide sm:my-0 w-[400px]"
            />
        </div>

    )
}
