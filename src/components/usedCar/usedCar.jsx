import React from 'react'
import { Buttonwrapper, Buttonwrapper1, UsedCarwrapper } from './usedCarstyle';
import TableUsedCar from './table';
import { Button } from '@mui/material';

const UsedCarComponent = () => {
  return (
    <UsedCarwrapper>
    <Buttonwrapper>
      <p>UsedCarComponent</p>
      <Button variant="contained">New Motor</Button>
    </Buttonwrapper>
    <TableUsedCar/>
    <Buttonwrapper1>
      <Button variant="contained">Edit</Button>
      <Button variant="contained">Delete</Button>
    </Buttonwrapper1>
  </UsedCarwrapper>
  )
}

export default UsedCarComponent;