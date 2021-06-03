import React from 'react'
import { Field, Form } from "react-final-form";
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
        <Form className={classes.root}
            initialValues={props.initialValues}
            onSubmit={onSubmit}
            validate={(formValues) => {
                const errors = {};

                if (!formValues.title) {
                    errors.title = "You must enter a title";
                }

                if (!formValues.description) {
                    errors.description = "You must enter a description";
                }

                return errors;
            }}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className={classes.root} >
                    <Field name="title" label="Enter Title" component={renderInput} />
                    <Field name="description" label="Enter Description" component={renderInput} />
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                </form>
            )}
        >
            <Field name="title" label="Enter Title" component={renderInput} />
            <Field name="description" label="Enter Description" component={renderInput} />
            <Button variant="contained" color="primary" type="submit">Submit</Button>
        </ Form>
    )
}



export default StreamForm;


