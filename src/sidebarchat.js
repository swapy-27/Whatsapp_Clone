import React from 'react';
import './css/sidebarChat.css'
import { Avatar, IconButton } from '@mui/material';
function SidebarChat() {

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