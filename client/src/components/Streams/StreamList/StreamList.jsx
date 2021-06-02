import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {
    Button, Container,
    IconButton, List,
    ListItem, ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { fetchStreams } from "../../../actions";
import useStyles from "./StreamList.styles";



function StreamList({ fetchStreams, streams, currentUserId, isSignedIn }) {
    const classes = useStyles();
    useEffect(() => {
        fetchStreams();
    }, [fetchStreams]);

    const listOfStreams = streams.map(stream => (
        <ListItem className={classes.item} key={stream.id}>
            <ListItemAvatar>
                <Avatar alt="R">
                    R
                    </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={stream.title}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                        >
                            {stream.description}
                        </Typography>
                    </React.Fragment>
                }
            />
            {stream.userId === currentUserId &&
                <ListItemSecondaryAction>
                    <Link to={`/streams/edit/${stream.id}`}>
                        <IconButton>
                            <EditIcon />
                        </IconButton>
                    </Link>
                    <Link to={`/streams/delete/${stream.id}`}>
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    </Link>
                </ListItemSecondaryAction>
            }
        </ListItem>

    ));

    const createStreamBtn = () => {

        if (isSignedIn) {
            return (
                <div className={classes.create}>
                    <Link to="/streams/new" className={classes.link}>
                        <Button color="primary" variant="contained" m={1}>Create a Stream</Button>
                    </Link>
                </div>
            )
        }
    }


    return (
        <Container>
            <h2 style={{ textAlign: "center" }}>Streams</h2>
            <List className={classes.root}>
                {listOfStreams}
            </List>
            {createStreamBtn()}
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);