import React from 'react'
import MapIcon from '@material-ui/icons/Map';
import SideBarOptions from './SideBarOptions';
import HomeIcon from '@material-ui/icons/Home';
import ReportIcon from '@material-ui/icons/Report';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import '../css/sidebar.css';

function SideBar() {
    return (
        <div className="sidebar">
            <div className="yct-logo">
                <MapIcon ></MapIcon>
                <h5>Yabatech</h5>
            </div>
            <SideBarOptions Icon={HomeIcon} text={"Home"} active />
            <SideBarOptions Icon={ReportIcon} text={"Report"} />
            <SideBarOptions Icon={LocationSearchingIcon} text={"Tweets"} />
        </div>
    )
}

export default SideBar
