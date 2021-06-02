import React, { Component, createRef } from 'react'
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../../actions";
import styles from "./StreamShow.styles";
import { withStyles } from '@material-ui/core';

class StreamShow extends Component {
    constructor(props) {
        super(props);
        this.videoRef = createRef()
    }


    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        const { fetchStream } = this.props;

        fetchStream(id);
        this.buildPlayer();
    }
    componentDidUpdate() {
        this.buildPlayer();
    }

    componentWillUnmount() {
        this.flvPlayer.destroy();
    }

    buildPlayer = () => {
        const { match: { params: { id } } } = this.props;
        const { stream } = this.props;

        if (this.flvPlayer || !stream) {
            return;
        }
        this.flvPlayer = flv.createPlayer({
            type: "flv",
            url: `http://localhost:8000/live/${id}.flv`
        });
        this.flvPlayer.attachMediaElement(this.videoRef.current);
        this.flvPlayer.load();
    }
    render() {
        const { stream, classes } = this.props;
        if (!stream) {
            return <h1>Loading ...</h1>
        }
        return (
            <div className={classes.root} >
                <video ref={this.videoRef} className={classes.video} controls />
                <h1>{stream.title}</h1>
                <p>{stream.description}</p>
            </div>
        )
    }
}

const mapStateToProps = (state, { match: { params: { id } } }) => {
    return { stream: state.streams[id] }
}

export default connect(mapStateToProps, { fetchStream })(withStyles(styles)(StreamShow));