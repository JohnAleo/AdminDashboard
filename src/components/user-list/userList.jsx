import React from 'react'
import { Buttonwrapper, Buttonwrapper1, UserListwrapper } from './userListstyle';
import { Button } from '@mui/material';
import TableUserList from './table';

const UserListComponent = () => {
  return (
    <UserListwrapper>
    <Buttonwrapper>
      <p>UserListComponent</p>
      <Button variant="contained">New Motor</Button>
    </Buttonwrapper>
    <TableUserList/>
    <Buttonwrapper1>
      <Button variant="contained">Edit</Button>
      <Button variant="contained">Delete</Button>
    </Buttonwrapper1>
  </UserListwrapper>
  )
}

export default UserListComponent;