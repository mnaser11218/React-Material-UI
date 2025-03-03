import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Button, Tab } from '@mui/material';
import TabList from '@mui/lab/TabList';
import MenuSimple from '../styled-components/MyAccountButton';


const drawerWidth = 240;

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
  justifyContent: 'flex-end',
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

export default function LeftSidebar(props) {
  const { tab1, tab2, tab3 } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar  >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          {/* <div style={{ marginLeft: "15%" }} >
            <Button sx={{ color: "#008CBA", fontWeight: "bold", textTransform: "none", fontSize: "1em" }} href={`/${(tab1 || "").replace(/ /g, "")}`} variant='standard'>
              {tab1}
            </Button>
            <Button sx={{ color: "#008CBA", fontWeight: "bold", textTransform: "none", fontSize: "1em" }} href={`/${(tab2 || "").replace(/ /g, "")}`} variant='standard'>
              {tab2}
            </Button>
            <Button sx={{ color: "#008CBA", fontWeight: "bold", textTransform: "none", fontSize: "1em" }} href={`/${(tab3 || "").replace(/ /g, "")}`} variant='standard'>
              {tab3}
            </Button>

          </div> */}

<Box sx={{ borderBottom: 1, borderColor: 'divider', display:"flex", justifyContent: "space-between", width: "100%",   '@media (max-width: 600px)': {
      justifyContent: 'flex-start', border: "solid red 1px" // Aligns to the start on mobile
    }}} elevation={7} >
          {/* <TabList onChange={()=>console.log("hello")} aria-label="lab API tabs example"> */}
          <div>
            <Tab href={`/${(tab1 || "").replace(/ /g, "")}`} label={tab1} value="1" />
            <Tab href={`/${(tab2 || "").replace(/ /g, "")}`}  label={tab2} value="2" />
            <Tab href={`/${(tab3 || "").replace(/ /g, "")}`} label={tab3} value="3" />
            </div>
            <div style={{display: "flex",justifyContent: "flex-end"}}>
            < MenuSimple />
            </div>
          {/* </TabList> */}
        </Box>


        </Toolbar>
        
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Process Pulse', 'Data Glide', 'FixWiz', 'Frame', 'DeployNow', 'Beats'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                href="/processpulse"
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
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
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
  );
}
