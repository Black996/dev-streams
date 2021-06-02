import React, { useState, useEffect } from 'react';
import Modal from "../../Modal";
import useStyles from './StreamDelete.styles';
import { Button } from '@material-ui/core';
import history from '../../../helpers/history';
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../../actions";


function StreamDelete(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const { params: { id } } = props.match;
    const { deleteStream, fetchStream, stream } = props;

    useEffect(() => {
        fetchStream(id);
    }, [fetchStream, id])


    const renderDescription = () => {
        if (!stream) return "Are you sure you want to delete this stream?";
        const { title } = stream;
        const jsxDesc = (<span>Are you sure you want to delete <strong>{title.toUpperCase()}</strong > stream?</span>);
        return jsxDesc;
    }

    const actions = () => {
        return (
            <div id="transition-modal-actions" className={classes.actions}>
                <Button variant="contained" color="secondary" className={classes.action} onClick={() => deleteStream(id)}>Delete</Button>
                <Button variant="contained" color="primary" className={classes.action} onClick={handleClose}>Cancel</Button>
            </div>
        )
    }

    const handleClose = () => {
        setOpen(false);
        history.push("/")
    };

    return (
        <div>
            <Modal
                title="Delete Stream"
                description={renderDescription()}
                actions={actions()}
                onDismiss={handleClose}
                open={open}
            />
        </div>
    )
};
// Destructure the id of the stream to pre-fill its info from ownProps
const mapStateToProps = (state, { match: { params: { id } } }) => {
    return { stream: state.streams[id] }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);