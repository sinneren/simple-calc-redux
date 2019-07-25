import React from 'react';
import Input from '../../components/Input';
import PropTypes from 'prop-types';

const InputContainer = props => {
    const changeValue = (value) => {
        props.changeResult(value);
    }
    return <Input result={props.result} changeValue={changeValue} />
}
InputContainer.propTypes = {
    result: PropTypes.any.isRequired,
    changeResult: PropTypes.func.isRequired,
}
export default InputContainer;