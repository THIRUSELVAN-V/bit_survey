import React from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Input,
    Button,
  
    User,
    Pagination,
    cn,
} from "@heroui/react";
import { ButtonComponent } from "../button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { SearchIcon } from "../../assets";
import { Chip } from "../chip";
import { GoDotFill } from "react-icons/go";

 const statusOptions = [
    { name: "view", uid: "view" },
    { name: "remind", uid: "remind" },
];
const statusColorMap:any = {
    view: "!text-success-1000 !bg-success-1001",
    remind: "text-warning-700 !bg-success-1001",
};


export function TableSurvey({ visibleColumn, isSearch, setSelectedKeys,selectedKeys,createfunction=()=>{}, data, columns,isCreate=false }:any) {
    const [filterValue, setFilterValue] = React.useState("");
    const [visibleColumns, setVisibleColumns] = React.useState(new Set(visibleColumn));
    const [statusFilter, setStatusFilter] = React.useState("all");
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [sortDescriptor, setSortDescriptor] = React.useState({
        column: "age",
        direction: "ascending",
    });
    const [page, setPage] = React.useState(1);

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all" as any) return columns;

        return columns.filter((column:any) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const filteredItems = React.useMemo(() => {
        let filteredUsers = [...data];

        if (hasSearchFilter) {
            const lowerFilter = filterValue.toLowerCase();
            filteredUsers = filteredUsers.filter((user) =>
                user.name.toLowerCase().includes(lowerFilter) ||
                user.role.toLowerCase().includes(lowerFilter) ||
                user.team.toLowerCase().includes(lowerFilter) ||
                user.email.toLowerCase().includes(lowerFilter) ||
                user.status.toLowerCase().includes(lowerFilter)
            );
        }
        if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
            filteredUsers = filteredUsers.filter((user) =>
                Array.from(statusFilter).includes(user.status),
            );
        }

        return filteredUsers;
    }, [data, filterValue, statusFilter]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = React.useMemo(() => {
        return [...items].sort((a:any, b:any) => {
            const first = a[sortDescriptor.column];
            const second = b[sortDescriptor.column];
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const renderCell = React.useCallback((user:any, columnKey:any) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "name":
                return (
                    <User
                        avatarProps={{ radius: "full", src: user.avatar }}
                        description={user.rollNo}
                        name={cellValue}
                        className="text-secondary-800 font-semibold"
                        classNames={{name: "text-black",
                            description:"text-sm"
                        }}
                    >
                        {/* <p className="text-secondary-800 font-semibold text-lg">{user.email}</p>  */}
                    </User>
                );
            case "role":
                return (
                    <div className="flex flex-col ">
                     
                        <div className="text-bold text-tiny capitalize text-secondary-800 font-semibold">{user.team}</div>
                    </div>
                );
            case "Stay":
                return (
                    <div className="flex flex-col ">

                        <div className="text-bold text-tiny capitalize text-secondary-800 font-semibold">{user.Stay}</div>
                    </div>
                );
            case "status":
                return (
                    // <Chip className="capitalize " classNames={statusColorMap[user.status]} size="sm" variant="flat">
                    //     <p className="">{cellValue}</p> 
                    // </Chip>
                    <Chip label={cellValue} startContent={<GoDotFill />} baseClassName="!gap-1" chipClass="!flex" className={statusColorMap[user.status]}/>
                );
            case "email":
                return (
                    <div className="relative flex items-center gap-2 text-secondary-800 font-semibold">
                        {user.email}
                    </div>
                );

            default:
                return cellValue;
        }
    }, []);

    const onNextPage = React.useCallback(() => {
        if (page < pages) {
            setPage(page + 1);
        }
    }, [page, pages]);

    const onPreviousPage = React.useCallback(() => {
        if (page > 1) {
            setPage(page - 1);
        }
    }, [page]);

    const onRowsPerPageChange = React.useCallback((e:any) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = React.useCallback((value:any) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const onClear = React.useCallback(() => {
        setFilterValue("");
        setPage(1);
    }, []);

    const topContent = React.useMemo(() => {
        return (
            <div className="flex flex-col gap-4">
                {isSearch && <div className="flex justify-between gap-3 items-end">
                    <Input
                        isClearable
                        className="w-full sm:max-w-[44%]"
                        placeholder="Search by name..."
                        startContent={<SearchIcon />}
                        value={filterValue}
                        onClear={() => onClear()}
                        onValueChange={onSearchChange}
                    />
                  
                </div>
    }
               
            </div>
        );
    }, [
        filterValue,
        statusFilter,
        visibleColumns,
        onRowsPerPageChange,
        data.length,
        onSearchChange,
        hasSearchFilter,
    ]);

    const bottomContent = React.useMemo(() => {
    return (
            <div className="py-2 px-2 w-full flex justify-center items-center  ">
                {/* <span className="w-[30%] text-small text-default-400">
                    {selectedKeys as any === "all"
                        ? "All items selected"
                        : `${selectedKeys.size} of ${filteredItems.length} selected`}
                </span> */}
             
                <div className={cn("flex justify-between  items-center w-full gap-2", isCreate? "justify-end" : "")}>
                {data.length>10 && <div className={cn("flex  justify-between items-center w-full gap-2",{isCreate:"w-[90%]"})}>
                    <ButtonComponent handleOnClick={onPreviousPage} baseClassName="border-secondary-700 gap-2 h-max p-2       w-max" buttonText="Previous" buttonIcon={<FaArrowLeft size={15}  className="text-secondary-800"/> }  textClassName="text-red-900 text-secondary-800"/>
                    <Pagination  page={page}
                        total={pages}
                        onChange={setPage} />
                    <Button
                        onPress={ onNextPage  }
                    
                        // Base styling with NextUI Button component
                        className={cn(
                            ' border border-content2-200 rounded-[0.37rem] gap-1 h-[2.5rem] w-[10rem] transition-colors',
                     'bg-background hover:!bg-background data-[hover=true]:!bg-background', // Allow custom background color
                            "border-secondary-700 gap-2 w-max h-max p-2", // Allow custom class overrides
                        )}
                        size='sm'
                       
                       
                    >
                        
                        <div
                            className={cn(
                                'text-[0.875rem] flex gap-2 font-source font-semibold ',
                                "text-secondary-800", // Allow custom text styling
                            )}
                        >
                            Next <div className="rotate-2"><FaArrowRight  size={15} className="text-secondary-800" /></div>
                        </div>
                    </Button>
                  
                    {/* <label className="flex items-center text-default-400 text-small">
                        Rows per page:
                        <select
                            className="bg-transparent outline-none text-default-400 text-small"
                            onChange={onRowsPerPageChange}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </label> */}
                </div>}
                {isCreate && <ButtonComponent handleOnClick={createfunction} baseClassName="border-secondary-700  items-center gap-2 h-max  bg-primary       w-max p-2 px-8 " buttonText="Create" isIcon={false} textClassName="!text-background font-regular " />
    }
                </div>
            </div>
        );
    }, [selectedKeys, items.length, page, pages, hasSearchFilter]);
   
    return (
        <Table
            isHeaderSticky
            aria-label="Example table with custom cells, pagination and sorting"
            bottomContent={bottomContent}
            bottomContentPlacement="outside"
            classNames={{
               
                thead:"border-0 !shadow-none first:shadow-none [&>tr]:first:shadow-none",
                td: [
                    // changing the rows border radius
                    // first
                    "group-data-[first=true]/tr:first:before:rounded-none ",
                    "group-data-[first=true]/tr:last:before:rounded-none",
                    // middle
                    "group-data-[middle=true]/tr:before:rounded-none",
                    // last
                    "group-data-[last=true]/tr:first:before:rounded-none",
                    "group-data-[last=true]/tr:last:before:rounded-none",
                    "first:!w-1  pr-0"
                ],
                wrapper: "max-h-[100%] h-full p-0",
                tr:"first:!w-2 border-b last:border-0 ",
                th: ["bg-transparent", "text-default-500 ", "border-b border-b-0 shadow-none", "", "pr-0"],
                
            }}
            
            checkboxesProps={{
                radius:"full",
                classNames: {
                    wrapper: " rounded-full",
                    
                },
            }}
            selectedKeys={selectedKeys}
            selectionMode="multiple"
            sortDescriptor={sortDescriptor as any }
            topContent={topContent}
            topContentPlacement="outside"
            onSelectionChange={setSelectedKeys as any}
            onSortChange={setSortDescriptor as any}
          

        >
            <TableHeader columns={headerColumns} className="!bg-red-600" >
                {(column:any) => (
                    <TableColumn
                        key={column.uid}
                        align={column.uid === "actions" ? "center" : "start"}
                        allowsSorting={column.sortable} 
                        className="pl-1 "
                    >
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody emptyContent={"No users found"} items={sortedItems}>
                {(item) => (
                    <TableRow key={item.id} className="">
                        {(columnKey) => <TableCell  className="pl-1">{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}

