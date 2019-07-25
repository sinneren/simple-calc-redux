import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    const onClickHandler = () => {
        props.clickHandler(props.value)
    }
    return (
        <button onClick={onClickHandler}>{props.text}</button>
    )
}
Button.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
}

export default Button;