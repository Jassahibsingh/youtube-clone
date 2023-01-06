import React from 'react'
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Sidebar.css";

function sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow selected Icon={HomeIcon} title="Home"/>
        <SidebarRow Icon={LocalFireDepartmentIcon} title="Trending"/>
        <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
        <hr />
        <SidebarRow Icon={VideoLibraryIcon} title="Library" />
        <SidebarRow Icon={HistoryIcon} title="History" />
        <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
        <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
        <SidebarRow Icon={ThumbUpOutlinedIcon} title="Liked Videos" />
        <SidebarRow Icon={ExpandMoreIcon} title="Show More" />
    </div>
  )
}

export default sidebar