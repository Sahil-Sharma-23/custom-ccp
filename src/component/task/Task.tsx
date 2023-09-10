import './Task.css';
import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AssignmentIcon from '@mui/icons-material/Assignment';

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
        <QuestionAnswerIcon sx={{ fontSize: "10rem", color: "#0056b3" }} />
      </div>
      <Button
        onClick={() => currentActiveWindowCallBack('CreateTask')}
        variant="outlined"><AssignmentIcon />Create Task</Button>
    </div >
  )
}

export default Call;