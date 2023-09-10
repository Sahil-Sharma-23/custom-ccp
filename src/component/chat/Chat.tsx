import './Chat.css';
import { useState } from 'react';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import MessageIcon from '@mui/icons-material/Message';
import { Typography } from '@mui/material';

const Chat = () => {
  // TODO: Fetch username from AWS Connect and update useState property
  const [user, setUser] = useState('Sahil');
  return (
    <div className="container-chat-page">
      <Typography variant='h6' component='h2' sx={{ paddingTop: '10rem' }}>
        Welcome {user}
      </Typography>
      <div className="container-icon">
        <MessageIcon sx={{ fontSize: 80, marginRight: 4 }} />
        <InsertCommentIcon sx={{ fontSize: 80 }} />
      </div>
      <Typography sx={{ paddingBottom: '4rem' }}>
        You have 0 open chats
      </Typography>
    </div>
  )
}

export default Chat;