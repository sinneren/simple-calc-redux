import React from 'react';
import PropTypes from 'prop-types';
import { Button as BButton } from 'react-bulma-components';

const Button = props => {
    const onClickHandler = () => {
        props.clickHandler(props.value)
    }
    return (
        <BButton onClick={onClickHandler} fullwidth={true}>{props.text}</BButton>
    )
}
Button.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
}

export default Button;