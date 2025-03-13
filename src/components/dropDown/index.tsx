import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FiEdit2 } from 'react-icons/fi'
import { IoSettings, IoSettingsOutline, IoSettingsSharp } from 'react-icons/io5'
import { LiaShareAltSolid } from 'react-icons/lia'

export const DropdownComp = () => {

    const items = [
        {key:'edit',label:'Edit', icon:<FiEdit2 />},
        {key:'share',label:'Share', icon:<LiaShareAltSolid />},
        {key:'delete',label:'Delete', icon:<AiOutlineDelete />},
        {key:'permissions',label:'Permissions', icon:<IoSettingsOutline  />},
    ]

  return (
    <div>
    <Dropdown
    placement='right-start'
    className='min-w-fit w-fit'>
      <DropdownTrigger>
        <BsThreeDotsVertical
                  size={18}
                  className=" text-content2-800 cursor-pointer"
                />
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={items}
      className=''>
        {(item) => (
          <DropdownItem
            key={item.key}
           className='font-bold'
            startContent={item.icon}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
    </div>
  )
}
