import React, { useEffect, useState } from 'react';
import '../css/sidebar.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SidebarChat from './sidebarchat';
import { getRoomsData } from '../api';
function Sidebar() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const rooms_data = getRoomsData();
        setRooms(rooms_data);

    }, [])

    return (
        <div className='sidebar'>

            <div className='sidebar_header'>

                <Avatar src='https://media-exp1.licdn.com/dms/image/C5603AQFbWE_3k6eaYA/profile-displayphoto-shrink_800_800/0/1643776882932?e=1651708800&v=beta&t=ChEGn5eMB0-kUQJNVvR6hVGqxOccooCj4WOs-WGOLqM' />
                <div className='sidebar_headerRight'>

                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>

                    <IconButton>
                        <ChatIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

            </div>

            <div className='sidebar_search'>

                <div className='sidebar_searchContainer'>

                    <SearchRoundedIcon />

                    <input placeholder='search or start new chat' type='text' />

                </div>

            </div>


            <div className='sidebar_chats'>
                {/* {rooms.map((rooms_data)=>{
                    return <SidebarChat props={rooms_data}/>
                })} */}
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />

            </div>

        </div>

    )

}


export default Sidebar;