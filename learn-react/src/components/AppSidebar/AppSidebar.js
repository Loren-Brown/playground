import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

import SidebarLogo from '../../assets/images/logoipsum-336.svg';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// Pulled most of this from an mui.com drawer example
const drawerWidth = 270;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

function AppSidebar(props) {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  // TODO:  This should be passed as a poroperty
  const upperSidebar = [
    {
      text: 'Home',
      icon: <HomeIcon />,
      link: '/'
    },
    {
      text: 'Favorites',
      icon: <StarIcon />,
      link: '/favorites'
    },
    {
      text: 'Analytics',
      icon: <AnalyticsIcon />,
      link: '/analytics'
    },
  ];

  const lowerSidebar = [
    {
      text: 'Linked In',
      icon: <LinkedInIcon />,
      link: 'https://www.linkedin.com/in/loren-brown/'
    },
    {
      text: 'GitHub',
      icon: <GitHubIcon />,
      link: 'https://github.com/Loren-Brown'
    },
  ]

  const element = <>
   <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            <img src={SidebarLogo}/>
          </IconButton>
        </DrawerHeader>
        <Divider />

        {/* This is a mess */}
        <List>
          {upperSidebar.map((sidebarEntry) => (
            <ListItem key={sidebarEntry.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                to={sidebarEntry.link}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {
                    sidebarEntry.icon
                  }
                </ListItemIcon>
                <ListItemText
                  primary={sidebarEntry.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {lowerSidebar.map((sidebarEntry) => (
            <ListItem key={sidebarEntry.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                to={sidebarEntry.link}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {sidebarEntry.icon}
                </ListItemIcon>
                <ListItemText
                  primary={sidebarEntry.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  </>
 
  return element;
}

export default AppSidebar;
