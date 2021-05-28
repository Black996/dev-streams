import React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from "./Header.styles";


export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" >
                        <Link to="/"><i className={`fas fa-mug-hot ${classes.link}`}></i></Link>
                    </Typography>
                    <Typography variant="h6" className>
                        <Link to="/" className={classes.link}>All Streams</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/streams/new" className={classes.link}>New Stream</Link>
                    </Typography>
                    <Link to="/" className={classes.link}><Button color="inherit">All Streams</Button></Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
