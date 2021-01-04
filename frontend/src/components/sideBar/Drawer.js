import React, { useState } from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
    Drawer,
    List,
    CssBaseline,
    Divider,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssessmentIcon from '@material-ui/icons/Assessment';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import logo from '../../assets/imagens/logo.png'
import miniLogo from '../../assets/imagens/miniLogo.png'

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 8,
        color: '#eee'
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        backgroundColor: '#4b5c6b',
        color: '#fff',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: '#4b5c6b',
        color: '#fff',
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


export default function MiniDrawer() {
    const history = useHistory();
    const classes = useStyles();
    const theme = useTheme();
    const lastState = JSON.parse(localStorage.getItem("@KAROO:drawer"))
    const [open, setOpen] = useState(lastState !== null ? lastState : true)

    const handleDrawerOpen = () => {
        setOpen(true);
        localStorage.setItem("@KAROO:drawer", true)
    };

    const handleDrawerClose = () => {
        setOpen(false);
        localStorage.setItem("@KAROO:drawer", false)

    };

    return (
        <div className={classes.root}>
            <CssBaseline />

            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}>
                {open ?
                    <div className={classes.toolbar} onClick={handleDrawerClose}>
                        <img src={logo} style={{ width: "75%", alignSelf: 'center', cursor: 'pointer', margin: 10 }} alt='Logo Karoo' />
                        <IconButton style={{ color: "#fff" }}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div> :
                    <img src={miniLogo} alt='Mini Logo Karoo' onClick={handleDrawerOpen}
                        style={{
                            width: 50,
                            cursor: 'pointer',
                            alignSelf: 'center',
                            marginBottom: 10,
                            marginTop: 15
                        }}>
                    </img>}
                <Divider />
                <List>
                    
                        <ListItem button key="Dashboard" onClick={() => history.push('/')}>
                            <ListItemIcon> <AccountCircleIcon style={{ color: '#eee' }} /></ListItemIcon>
                            <ListItemText primary="Cadastrar Férias" />
                        </ListItem>

                        <ListItem button key="Relatorio" onClick={() => history.push('/relatorio')}>
                            <ListItemIcon><AssessmentIcon style={{ color: '#eee' }} /></ListItemIcon>
                            <ListItemText primary="Gerar Relatório" />
                        </ListItem>

                        <ListItem button key="Ferias Ativas" onClick={() => history.push('/ativas')}>
                            <ListItemIcon><CheckCircleOutlineIcon style={{ color: '#eee' }} /></ListItemIcon>
                            <ListItemText primary="Férias Ativas"/>
                        </ListItem>

                </List>
            </Drawer>

        </div>
    );
}