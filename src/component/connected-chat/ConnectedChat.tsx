import './ConnectedChat.css';
import { useState, useEffect } from 'react';
import {
  Alert,
  AlertTitle,
  Button,
  TextField,
  Typography
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import ClearIcon from '@mui/icons-material/Clear';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

const ConnectedChat = () => {
  const [customerName, setCustomerName] = useState('Customer');
  const [chatMinutes, setChatMinutes] = useState(0);
  const [chatSeconds, setChatSeconds] = useState(0);

  // Update call connected timer
  var timer: any;
  useEffect(() => {
    timer = setInterval(() => {
      setChatSeconds(chatSeconds + 1);
      if (chatSeconds === 59) {
        setChatSeconds(0);
        setChatMinutes(chatMinutes + 1);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  });

  return (
    <div className="container-chat-info">
      <div className="container-top-page">
        <Alert sx={{ mb: '1rem' }}>
          <AlertTitle>{customerName}</AlertTitle>
          <div className="container-time">
            <AccessTimeIcon />
            <Typography component="h2">
              {chatMinutes < 10 ? "0" + chatMinutes : chatMinutes}:
              {chatSeconds < 10 ? "0" + chatSeconds : chatSeconds}
            </Typography>
            <TimelapseIcon />
            <Typography component="h2">
              {chatMinutes < 10 ? "0" + chatMinutes : chatMinutes}:
              {chatSeconds < 10 ? "0" + chatSeconds : chatSeconds}
            </Typography>
          </div>
        </Alert>
        <div className="container-quick-connects-input">
          <div className="quick-connect-input-head">
            <Typography variant='h6' component="h2" sx={{ paddingLeft: '1.5rem' }}>
              Quick Connects
            </Typography>
            <ClearIcon sx={{
              paddingRight: '0',
              fontSize: 28
            }} />
          </div>
          <TextField
            id="standard-basic"
            label="Quick Connect or Number"
            variant="standard"
            sx={{ marginLeft: '1.5rem' }} />
        </div>
        <div className="container-ReplyToMail">
          <Typography variant='h6' component="h2" sx={{ paddingLeft: '1.5rem' }}>
            ReplyToMail
          </Typography>
        </div>
      </div>
      <div className="container-button">
        <Button variant="outlined">
          <SyncAltIcon />
        </Button>
      </div>
    </div >
  )
}

export default ConnectedChat;
