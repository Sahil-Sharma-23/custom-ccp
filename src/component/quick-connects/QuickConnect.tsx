import './QuickConnect.css';
import { Button, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ClearIcon from '@mui/icons-material/Clear';
import PhoneIcon from '@mui/icons-material/Phone';
import DialpadIcon from '@mui/icons-material/Dialpad';

type HomeProps = {
  currentActiveWindowCallBack: any;
}

const QuickConnect = ({ currentActiveWindowCallBack }: HomeProps) => {
  const [countryCode, setCountryCode] = useState('us');
  const [number, setNumber] = useState('');

  useEffect(() => {
    console.log("Current number: ", number);  // DEBUG
  }, [number])

  return (
    <div className="container-quick-connect-page">
      <div className="container-country-selector">
        <div className="container-number-pad-clear">
          <Typography variant="h6" component="h6">
            Quick Connects
          </Typography>
          <ClearIcon
            sx={{ cursor: "pointer" }}
            onClick={() => currentActiveWindowCallBack("Call")} />
        </div>
        <div className="container-label-number-input">
          <Typography>
            Country
          </Typography>
          <Typography>
            Phone number or Quick connect
          </Typography>
        </div>
        <div className="container-phone-input">
          <PhoneInput
            country={countryCode}
            value={number}
            onChange={phone => setNumber(phone)}
            onlyCountries={['us', 'ca', 'gb', 'pr', 'mx']}
            placeholder='Enter a phone number'
            countryCodeEditable={false}
            inputProps={{
              name: 'phone',
              required: true,
              autoFocus: true
            }}
          />
        </div>
        <Typography sx={{ marginLeft: '1.5rem' }}>
          No results found
        </Typography>
      </div>
      <div className="container-button">
        <Button
          variant="outlined"
          onClick={() => currentActiveWindowCallBack("Numpad")}>
          <DialpadIcon />
          Number pad</Button>
        <Button variant="contained">
          <PhoneIcon />
          Call</Button>
      </div>
    </div>
  )
}

export default QuickConnect;