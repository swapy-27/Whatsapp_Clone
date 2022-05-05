import React from 'react';
import '../css/sidebarChat.css'
import { Avatar } from '@mui/material';
const  SidebarChat=(props)=> {
    const rooms_data = props.rooms_data;

    return (

        <div className='sidebarChat' >

            <Avatar />

            <div className='sidebarChar_info'>
                <h2>Room Name</h2>
                <p>This is the last message</p>
            </div>

        </div>


    );

}

export default SidebarChat