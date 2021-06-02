import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { editStream, fetchStream } from "../../../actions";
import StreamForm from "../StreamForm";
import _ from "lodash";

function StreamEdit(props) {
    const { match: { params: { id } } } = props;
    const { fetchStream } = props;
    const { stream } = props;
    useEffect(() => {
        fetchStream(id);
    }, []);




    const onSubmit = formValues => {
        console.log(id, formValues);
        props.editStream(id, formValues)
    }


    if (!props.stream) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h3 style={{ marginLeft: "10px" }}>Edit A Stream</h3>
            <StreamForm
                onSubmit={onSubmit}
                initialValues={_.pick(stream, 'title', 'description')}
            />
        </div>
    )
}

// Destructure the id of the stream to pre-fill its info from ownProps
const mapStateToProps = (state, { match: { params: { id } } }) => {
    return { stream: state.streams[id] }
}

export default connect(mapStateToProps, { editStream, fetchStream })(StreamEdit);