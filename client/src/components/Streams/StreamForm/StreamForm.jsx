import React from 'react'
import { Field, reduxForm } from "redux-form";
import { Button, TextField } from '@material-ui/core';
import validate from "../../../helpers/validate";
import useStyles from "./StreamForm.styles";

function StreamForm(props) {
    const classes = useStyles();
    const renderInput = ({ input, label, meta }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <TextField className={classes.textField} {...input} autoComplete="off" />
                {/* show error if element touched with no value entered */}
                <div className={classes.error}>{meta.touched && meta.error}</div>
            </div>
        )
    };

    const onSubmit = formValues => {
        props.onSubmit(formValues)
    }

    return (
        <form onSubmit={props.handleSubmit(onSubmit)} className={classes.root} >
            <Field name="title" label="Enter Title" component={renderInput} />
            <Field name="description" label="Enter Description" component={renderInput} />
            <Button variant="contained" color="primary" type="submit">Submit</Button>
        </form>
    )
}



export default reduxForm({
    form: "streamForm",
    validate
})(StreamForm);