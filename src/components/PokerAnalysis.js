import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import UploadHands from './UploadHands';
import Icon from '@material-ui/core/Icon';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 200,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        zIndex: 1000,
        position: 'absolute',
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginLeft: drawerWidth,
        marginTop: 60
    },
    imageIcon: {
        height: '100%'
      },
    iconRoot: {
    textAlign: 'center'
    }    
}));

const drawerWidth = 240;

const UPLOAD_SCREEN = 'Upload Hands'
export default function PokerAnalysis() {
    const classes = useStyles();
    const [selectedScreen, setSelectedScreen] = useState('hello world')

    return (
        <div className={classes.root}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="absolute" className={classes.appBar} style={{ background: "#35654d" }}>
                        <Toolbar>
                            <Avatar src='/logo.jpg' variant='no' sx={{ height: '70px', width: '70px', marginRight: "20px" }}></Avatar>
                            <Typography variant="h4" component="div" style={{ fontFamily: "Lato" }} sx={{ flexGrow: 1 }}>
                                PAAS: Poker Analysis Assistant
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
                <div>
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <Toolbar />
                        <div className={classes.drawerContainer}>
                            <List>
                                <ListItemButton key="Upload Hands" onClick={() => { setSelectedScreen(UPLOAD_SCREEN) }}>
                                    <ListItemIcon>
                                        <CloudUploadIcon color='success'/>
                                    </ListItemIcon>
                                    <ListItemText primary="Upload Hands" />
                                </ListItemButton>
                            </List>
                            <Divider />
                        </div>
                    </Drawer>
                    <main className={classes.content}>
                        {selectedScreen === UPLOAD_SCREEN && (<UploadHands />)}
                    </main>
                </div>
            </Box>

        </div>
    )
}