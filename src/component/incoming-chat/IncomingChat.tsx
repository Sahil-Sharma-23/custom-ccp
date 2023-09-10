import './IncomingChat.css';
import { useState } from 'react';
import { Alert, AlertTitle, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';

const IncomingChat = () => {

  // TODO: Fetch customer information from AWS Connect and update
  const [customerName, setCustomerName] = useState('Customer');

  return (
    <>
      <div className="container-incoming-chat-page">
        <div className="container-chat-info">
          <Alert severity="success">
            <AlertTitle>{customerName}</AlertTitle>
            <strong>Incoming Chat</strong>
          </Alert>
        </div>
        <div className="container-button">
          <Button
            variant="contained"
            color="success"
            sx={{
              height: '3rem'
            }}>
            <CheckIcon sx={{ mr: 1 }} />Success
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{
              height: '3rem'
            }}>
            <CancelIcon sx={{ mr: 1 }} />Reject Chat
          </Button>
        </div>
      </div>
    </>
  )
}

export default IncomingChat;