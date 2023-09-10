import '../../App.css';
import { Button } from '@mui/material';
import 'amazon-connect-streams';
import { terminateSession } from '../../scripts/AgentHooks';

const Setting = () => {

  // TODO: Design the settings page (if required)

  const logout = () => {
    terminateSession();
  }

  return (
    <Button onClick={logout} variant="contained">Logout</Button>
  )
}

export default Setting;