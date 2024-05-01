import React from 'react'
import { Buttonwrapper, Buttonwrapper1, Campingwrapper } from './campingstyle';
import { Button } from '@mui/material';
import TableCaravan from '../caravan/table';

const CampingComponent = () => {
  return (
    <Campingwrapper>
    <Buttonwrapper>
      <p>CampingComponent</p>
      <Button variant="contained">New Motor</Button>
    </Buttonwrapper>
    <TableCaravan/>
    <Buttonwrapper1>
      <Button variant="contained">Edit</Button>
      <Button variant="contained">Delete</Button>
    </Buttonwrapper1>
  </Campingwrapper>
  )
}

export default CampingComponent;