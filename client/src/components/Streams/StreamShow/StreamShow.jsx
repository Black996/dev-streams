import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchStream } from "../../../actions";

function StreamShow(props) {
    const { fetchStream, stream } = props;
    const { match: { params: { id } } } = props;

    useEffect(() => {
        fetchStream(id);
    }, [fetchStream, id])

    if (!stream) {
        return <h1>Loading ...</h1>
    }
    return (
        <div>
            <h1>{stream.title}</h1>
            <p>{stream.description}</p>
        </div>
    )
}

const mapStateToProps = (state, { match: { params: { id } } }) => {
    return { stream: state.streams[id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow);