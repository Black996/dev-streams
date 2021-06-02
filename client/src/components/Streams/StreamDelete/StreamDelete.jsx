import React from 'react';
import Modal from "../../Modal";
import useStyles from './StreamDelete.styles';
import { Button } from '@material-ui/core';


function StreamDelete() {
    const classes = useStyles();

    const renderDescription = () => {
        return "Are you sure you want to delete this Stream?"
    }
    const actions = () => {
        return (
            <div id="transition-modal-actions" className={classes.actions}>
                <Button variant="contained" color="secondary" className={classes.action}>Delete</Button>
                <Button variant="contained" color="primary" className={classes.action}>Cancel</Button>
            </div>
        )
    }

    return (
        <div>
            <Modal
                title="Delete Stream"
                description={renderDescription()}
                actions={actions}
            />
        </div>
    )
}

export default StreamDelete;