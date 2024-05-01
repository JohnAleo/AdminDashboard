import React from 'react'
import TableTuning from '../tuning/table'
import { Buttonwrapper, Buttonwrapper1, Tuningwrapper } from './tablestyle';
import { Button } from '@mui/material';

const TuningComponent = () => {
  return (
    <Tuningwrapper>
      <Buttonwrapper>
      <p>TuningComponent</p>
        <Button variant="contained">New Tuning</Button>
      </Buttonwrapper>
      <TableTuning/>
      <Buttonwrapper1>
        <Button variant="contained">Edit</Button>
        <Button variant="contained">Delete</Button>
      </Buttonwrapper1>
    </Tuningwrapper>
  )
}

export default TuningComponent;