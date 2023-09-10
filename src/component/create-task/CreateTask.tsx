import './CreateTask.css';
import { useState } from 'react';
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import TimezoneSelect from 'react-timezone-select'

type HomeProps = {
  currentActiveWindowCallBack: any;
}

// Type for date picker
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Task = ({ currentActiveWindowCallBack }: HomeProps) => {
  // Store task & description length information
  const [taskNameLength, setTaskNameLength] = useState(0);
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [assignTo, setAssignTo] = useState('');

  const assignToTargets = ['ReplyToMail',];

  const assignToChangeHandler = (event: any) => {
    setAssignTo(event.target.value);
  }

  const [date, onDateChange] = useState<Value>(new Date());
  const [time, onTimeChange] = useState<any>('10:00');

  const [selectedTimezone, setSelectedTimezone] = useState<any>(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )

  const [numberOfReferences, setNumberOfReferences] = useState(0);

  const renderReferences = () => {
    const references = [];
    for (let i = 0; i < numberOfReferences; i++) {
      references.push(
        <div key={i} className="contianer-add-reference">
          <div className="container-reference-heading">
            <Typography>Reference name</Typography>
            <ClearIcon
              onClick={() => { setNumberOfReferences(numberOfReferences - 1) }}
              sx={{ cursor: "pointer" }} />
          </div>
          <TextField id="standard-basic" variant="standard" sx={{ mb: "1rem" }} />
          <Typography>Link</Typography>
          <TextField id="standard-basic" variant="standard" defaultValue="https://" />
        </div>
      );
    }
    return references;
  }

  return (
    <div className="container-task-page">
      <div className="container-heading">
        <Typography variant='h5' component='h2'>
          Create task
        </Typography>
        <ClearIcon
          onClick={() => currentActiveWindowCallBack('Task')}
          sx={{ cursor: "pointer", fontSize: "28px" }} />
      </div>
      <div className="container-task-name">
        <Typography>
          <strong>Task name</strong>
        </Typography>
        <TextField
          id="standard-basic"
          variant="standard"
          onChange={(event) => { setTaskNameLength(event.target.value.length) }} />
        <Typography>{taskNameLength} / 150</Typography>
      </div>
      <div className="container-description">
        <Typography className='description-title'>
          <strong>Description</strong><i>Optional</i>
        </Typography>
        <TextField
          id="standard-basic"
          variant="standard"
          onChange={(event) => { setDescriptionLength(event.target.value.length) }} />
        <Typography>{descriptionLength} / 4096</Typography>
      </div>
      <div className="container-references">
        <Typography>
          <strong>References</strong>
        </Typography>

        {renderReferences()}

        <Typography
          onClick={() => { setNumberOfReferences(numberOfReferences + 1) }}
          sx={{
            color: "blue",
            cursor: "pointer"
          }}>Add reference</Typography>
      </div>
      <div className="container-assign-to">
        <Typography sx={{ ml: "1rem", mt: "1rem" }}>
          <strong>Assign to</strong>
        </Typography>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={assignTo}
            onChange={assignToChangeHandler}
            label="Age"
          >
            {assignToTargets.map((target, index) => {
              return (
                <MenuItem key={index} value={target}>{target}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </div>
      <div className="container-data-time">
        <Typography sx={{ marginBottom: "0.75rem" }}>
          <strong>Scheduled date/time</strong><i>Optional</i>
        </Typography>
        <div className="container-date-picker">
          <DatePicker onChange={onDateChange} value={date} />
        </div>
        <div className="container-time-picker">
          <TimePicker onChange={onTimeChange} value={time} />
          <TimezoneSelect
            className='time-zone-selector'
            value={selectedTimezone}
            onChange={setSelectedTimezone}
          />
        </div>
      </div>
      <div className="button-container">
        <Button variant="outlined">Cancle</Button>
        <Button variant="contained">Create</Button>
      </div>
    </div>
  )
}

export default Task;