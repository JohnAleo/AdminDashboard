import React from 'react'
import TableMotor from './table';
import { Buttonwrapper, Buttonwrapper1, Motorwrapper } from './motorstyle';
import { Button } from '@mui/material';

const MotorComponent = () => {
  return (
    <Motorwrapper>
      <Buttonwrapper>
        <p>MotorComponent</p>
        <Button variant="contained">New Motor</Button>
      </Buttonwrapper>
      <TableMotor/>
      <Buttonwrapper1>
        <Button variant="contained">Edit</Button>
        <Button variant="contained">Delete</Button>
      </Buttonwrapper1>
    </Motorwrapper>

  )
}

export default MotorComponent;