import React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import useStyles from "./Header.styles";
import GoogleAuth from '../GoogleAuth';
import { Icon } from '@material-ui/core';


export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" >
                        <Link to="/" p={-2}><Icon className={`fas fa-mug-hot ${classes.logo}`} style={{ color: "black" }} /></Link>
                    </Typography>
                    <Typography variant="h6">
                        <Link to="/" className={classes.link}>All Streams</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/streams/new" className={classes.link}>New Stream</Link>
                    </Typography>
                    <Link to="/" className={classes.link}><Button color="inherit">All Streams</Button></Link>
                    <GoogleAuth />
                </Toolbar>
            </AppBar>
        </div>
    );
}
