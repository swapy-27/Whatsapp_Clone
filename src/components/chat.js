import React from 'react'
import '../css/chat.css'
import { Avatar, IconButton } from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AttachFileIcon from '@mui/icons-material/AttachFile';

import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';
function Chat() {

    return (
        <div className='chat'>

            <div className='chat_header'>

                <Avatar />

                <div className='chat_headerInfo'>
                    <h3>Room name</h3>
                    <p>Last seen at ....</p>

                </div>

                <div className='chat_headerRight'>
                    <IconButton>
                        <SearchRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>

            <div className='chat_body'>
                <p className='chat_message'>
                    <span className='chat_name'>
                        Swap
                    </span>
                    This is a message
                    <span className='chat_timestamp'>
                        {new Date().toLocaleDateString()}
                        {new Date().toLocaleTimeString()}
                    </span>
                </p>
                <p className='chat_message chat_receiver'>
                    <span className='chat_name'>
                        Swap
                    </span>
                    This is a message
                    <span className='chat_timestamp'>
                        {new Date().toLocaleDateString()}
                        {new Date().toLocaleTimeString()}
                    </span>
                </p>
            </div>

            <div className='chat_footer'>
                <IconButton>
                    <EmojiEmotionsIcon />
                </IconButton>


                {/* this form should send a post request */}
                <form>
                    <input placeholder='Type a message' type='text' />
                    <button type='submit'>Send </button>

                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div>

    )

}


export default Chat;