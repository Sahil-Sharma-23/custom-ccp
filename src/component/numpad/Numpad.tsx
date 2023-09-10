import { Button, ButtonGroup, Typography } from '@mui/material';
import './Numpad.css';
import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ClearIcon from '@mui/icons-material/Clear';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactsIcon from '@mui/icons-material/Contacts';

type HomeProps = {
  currentActiveWindowCallBack: any;
}

const NumPad = ({ currentActiveWindowCallBack }: HomeProps) => {
  const [countryCode, setCountryCode] = useState('us');
  const [number, setNumber] = useState('');

  useEffect(() => {
    console.log("Current number: ", number);  // DEBUG
  }, [number])

  const numberBtnClickHandler = (num: string) => {
    setNumber(number + num);
  }

  return (
    <div className="container-numpad-page">
      <div className="container-country-selector">
        <div className="container-number-pad-clear">
          <Typography variant="h6" component="h6">
            Number pad
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
      </div>
      <div className="container-numpad">
        <ButtonGroup variant="text" aria-label="text button group">
          <Button
            onClick={() => numberBtnClickHandler('1')}
            className='numpad-button bb'>1</Button>
          <Button
            onClick={() => numberBtnClickHandler('2')}
            className='numpad-button bb'>2</Button>
          <Button
            onClick={() => numberBtnClickHandler('3')}
            className='numpad-button bb'>3</Button>
        </ButtonGroup>
        <br />
        <ButtonGroup variant="text" aria-label="text button group">
          <Button
            onClick={() => numberBtnClickHandler('4')}
            className='numpad-button bb'>4</Button>
          <Button
            onClick={() => numberBtnClickHandler('5')}
            className='numpad-button bb'>5</Button>
          <Button
            onClick={() => numberBtnClickHandler('6')}
            className='numpad-button bb'>6</Button>
        </ButtonGroup>
        <br />
        <ButtonGroup variant="text" aria-label="text button group">
          <Button
            onClick={() => numberBtnClickHandler('7')}
            className='numpad-button bb'>7</Button>
          <Button
            onClick={() => numberBtnClickHandler('8')}
            className='numpad-button bb'>8</Button>
          <Button
            onClick={() => numberBtnClickHandler('9')}
            className='numpad-button bb'>9</Button>
        </ButtonGroup>
        <br />
        <ButtonGroup variant="text" aria-label="text button group">
          <Button
            onClick={() => numberBtnClickHandler('*')}
            className='numpad-button'>*</Button>
          <Button
            onClick={() => numberBtnClickHandler('0')}
            className='numpad-button'>0</Button>
          <Button
            onClick={() => numberBtnClickHandler('#')}
            className='numpad-button'>#</Button>
        </ButtonGroup>
      </div>
      <div className="container-button">
        <Button
          variant="outlined"
          onClick={() => currentActiveWindowCallBack("QuickConnects")}>
          <ContactsIcon />
          Quick Connects</Button>
        <Button variant="contained">
          <PhoneIcon />
          Call</Button>
      </div>
    </div >
  )
}

export default NumPad;