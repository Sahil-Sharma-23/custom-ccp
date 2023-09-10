import './Call.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import DialpadIcon from '@mui/icons-material/Dialpad';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import { useState } from 'react';
import { Typography } from '@mui/material';
import { getAgentDetails } from '../../scripts/AgentHooks';

type HomeProps = {
  currentActiveWindowCallBack: any;
}

const Call = ({ currentActiveWindowCallBack }: HomeProps) => {
  // TODO: Fetch username from AWS Connect and update useState property
  const [user, setUser] = useState('Sahil');

  return (
    <div className="container-call-page">
      <Typography variant='h5' component='h2'>
        Welcome {user}
      </Typography>
      <div className="container-icon">
        <PermPhoneMsgIcon sx={{ fontSize: 150, color: '#007bff' }}
          onClick={getAgentDetails} />
      </div>
      <div className="container-btn">
        <button
          className="phone-btn"
          onClick={() => currentActiveWindowCallBack("QuickConnects")}>
          <FontAwesomeIcon
            icon={faAddressBook}
            className="phone-icon" />
          Quick Connects
        </button>
        <button
          className="phone-btn"
          onClick={() => currentActiveWindowCallBack("Numpad")}>
          <DialpadIcon className="phone-icon" />
          Number Pad
        </button>
      </div>
    </div >
  )
}

export default Call;