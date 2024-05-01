import React from 'react'
import TableCaravan from './table';
import { Buttonwrapper, Buttonwrapper1, Caravanwrapper } from './caravanstyle';
import { Button } from '@mui/material';

const CaravanComponent = () => {
  return (
    <Caravanwrapper>
    <Buttonwrapper>
      <p>CaravanComponent</p>
      <Button variant="contained">New Motor</Button>
    </Buttonwrapper>
    <TableCaravan/>
    <Buttonwrapper1>
      <Button variant="contained">Edit</Button>
      <Button variant="contained">Delete</Button>
    </Buttonwrapper1>
  </Caravanwrapper>
  )
}

export default CaravanComponent;