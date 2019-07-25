import React from 'react'
import PropTypes from 'prop-types';
import { Form as BForm } from 'react-bulma-components';

const Input = (props) => {
    const onChangeHandler = event => {
        props.changeValue(event.currentTarget.value)
    }
    return (
        <BForm.Input type="text" value={props.result} onChange={onChangeHandler} readOnly />
    )
}
Input.propTypes = {
    result: PropTypes.any.isRequired,
    changeValue: PropTypes.func.isRequired,
}

export default Input;