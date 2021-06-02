import React from 'react'
import { connect } from "react-redux"
import { createStream } from "../../../actions";
import StreamForm from "../StreamForm";

function StreamCreate(props) {

    const onSubmit = formValues => {
        props.createStream(formValues)
    }

    return (
        <div>
            <h3 style={{ marginLeft: "10px" }}>Create A Stream</h3>
            <StreamForm onSubmit={onSubmit} />
        </div>

    )
}


export default connect(null, { createStream })(StreamCreate);