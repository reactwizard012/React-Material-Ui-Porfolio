import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';
import {
  AccountBox,
  Book,
  Home,
  ModeNight,
  People,
  Person,
  Settings,
  Storefront,
} from '@mui/icons-material';

interface Props {
  mode: 'light' | 'dark';
  setMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const SideBar: React.FunctionComponent<Props> = ({ setMode, mode }) => {
  return (
    <>
      <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Box position='fixed'>
          <List>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#home'>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary='Homepage' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#simple-list'>
                <ListItemIcon>
                  <Book />
                </ListItemIcon>
                <ListItemText primary='Pages' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#simple-list'>
                <ListItemIcon>
                  <People />
                </ListItemIcon>
                <ListItemText primary='Groups' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#simple-list'>
                <ListItemIcon>
                  <Storefront />
                </ListItemIcon>
                <ListItemText primary='Marketplace' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#simple-list'>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary='Friends' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#simple-list'>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary='Settings' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#simple-list'>
                <ListItemIcon>
                  <AccountBox />
                </ListItemIcon>
                <ListItemText primary='Profile' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#simple-list'>
                <ListItemIcon>
                  <ModeNight />
                </ListItemIcon>
              </ListItemButton>
              <Switch
                onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default SideBar;
