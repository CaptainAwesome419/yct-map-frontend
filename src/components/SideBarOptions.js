import React,{useState} from 'react'

import '../css/sidebarOptions.css';


function SideBarOptions({ Icon, text,active }) {
    return (
    <div className={`sideBarOption ${active && 'sideBarOption--active'}`}>
            <Icon />
            <h3>{text}</h3>
        </div>
    )
}

export default SideBarOptions
