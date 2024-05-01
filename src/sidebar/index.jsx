
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Link } from 'react-router-dom';

export default function SideBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <Link to="/motor">
          <ListItem>
            <ListItemButton>Motor</ListItemButton>
            </ListItem>
        </Link>
        <Divider/>
        <Link to="/caravan">
            <ListItem>
                <ListItemButton>Caravan</ListItemButton>
            </ListItem>
        </Link> 
          <Divider/>
        <Link to="/tuning">
          <ListItem>
            <ListItemButton>Tuning</ListItemButton>
          </ListItem>
        </Link>
          <Divider/>
        <Link to="/usedCar">
          <ListItem>
            <ListItemButton>Used Car</ListItemButton>
          </ListItem>
        </Link>
          <Divider/>
        <Link to="/camping">
          <ListItem>
            <ListItemButton>Camping place</ListItemButton>
          </ListItem>
        </Link>
          <Divider/>
        <Link to="/user-list">
          <ListItem>
            <ListItemButton>User List</ListItemButton>
          </ListItem>
        </Link>
          <Divider/>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><WidgetsIcon/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

