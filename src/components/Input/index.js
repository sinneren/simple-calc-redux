import React from 'react'
import PropTypes from 'prop-types';

const Input = (props) => {
    const onChangeHandler = event => {
        props.changeValue(event.currentTarget.value)
    }
    return (
        <>
            <input
                type="text"
                value={props.result}
                onChange={onChangeHandler}
                readOnly
            />
        </>
    )
}
Input.propTypes = {
    result: PropTypes.any.isRequired,
    changeValue: PropTypes.func.isRequired,
}

export default Input;