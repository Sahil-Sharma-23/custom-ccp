import './Navbar.css';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import CallIcon from '@mui/icons-material/Call';
import ChatIcon from '@mui/icons-material/Chat';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';
import { MenuItem, Select } from '@mui/material';
import { changeAgentStatusToAvailable } from '../../scripts/AgentHooks';

type HomeProps = {
  currentActiveWindowCallBack: any;
}

const Navbar = ({ currentActiveWindowCallBack }: HomeProps) => {
  const [availabilityStatus, setAvailabilityStatus] = useState('Offline');
  const [currentPage, setCurrentPage] = useState('Call');

  const changeAgentStatusHandler = () => {
    // TODO: Change status to offline
    if (availabilityStatus === 'Available') {
      setAvailabilityStatus('Offline');
    }
    // TODO: Change status to available
    if (availabilityStatus === 'Offline') {
      setAvailabilityStatus('Available');
      console.log(changeAgentStatusToAvailable());
    }
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: 'space-between'
          }}>
          <Select
            value={availabilityStatus}
            label={availabilityStatus}
            className="container-current-status">
            <MenuItem
              value='Available'
              onClick={changeAgentStatusHandler}>
              <SettingsInputAntennaIcon
                sx={{
                  color: "green",
                  paddingRight: '10px',
                  fontSize: 28
                }} />
              <Typography
                noWrap
                component="a"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 500,
                  color: 'inherit',
                  textDecoration: 'none',
                }}>
                Available
              </Typography>
            </MenuItem>
            <MenuItem
              value='Offline'
              onClick={changeAgentStatusHandler}>
              <SettingsInputAntennaIcon
                sx={{
                  color: "red",
                  paddingRight: '10px',
                  fontSize: 28
                }} />
              <Typography
                noWrap
                component="a"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 500,
                  color: 'inherit',
                  textDecoration: 'none',
                }}>
                Offline
              </Typography></MenuItem>
          </Select>

          <div className="page-icons">
            <Box
              className={`icon-container ${currentPage != 'Call' ? '' : 'active'}`}
              onClick={() => {
                currentActiveWindowCallBack("Call");
                setCurrentPage("Call");
              }}>
              <IconButton>
                <CallIcon />
              </IconButton>
            </Box>

            <Box
              className={`icon-container ${currentPage != 'Chat' ? '' : 'active'}`}
              onClick={() => {
                currentActiveWindowCallBack("Chat");
                setCurrentPage("Chat");
              }}>
              <IconButton>
                <ChatIcon />
              </IconButton>
            </Box>

            <Box
              className={`icon-container ${currentPage != 'Task' ? '' : 'active'}`}
              // onClick={() => setCurrentPage("Task")}
              onClick={() => {
                currentActiveWindowCallBack("Task");
                setCurrentPage("Task");
              }}>
              <IconButton>
                <AssignmentIcon />
              </IconButton>
            </Box>

            <Box
              className={`icon-container ${currentPage != 'Settings' ? '' : 'active'}`}
              onClick={() => {
                currentActiveWindowCallBack("Settings");
                setCurrentPage("Settings");
              }}>
              <IconButton
                sx={{ p: 0 }}>
                <SettingsIcon />
              </IconButton>
            </Box>
          </div>
        </Toolbar>
      </Container >
    </AppBar >
  );
}
export default Navbar;