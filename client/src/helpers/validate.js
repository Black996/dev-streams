const validate = formValues => {
    const errors = {};
    if (!formValues.title) {
        // user didn't enter a title
        errors.title = 'You must enter a title';
    } if (!formValues.description) {
        errors.description = "You must enter a description"
    }
    return errors;
}

export default validate;