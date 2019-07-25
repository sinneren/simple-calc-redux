import { CHANGE_VALUE, MEMORIZE_VALUE, ACTION_VALUE, CALCULATE_VALUE, CLEAR_ALL } from '../constants';
import PropTypes from 'prop-types';

export function changeValue(value) {
    return {
        type: CHANGE_VALUE,
        payload: value,
    }
}
changeValue.PropTypes = {
    value: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
}

export function memorizeValue() {
    return {
        type: MEMORIZE_VALUE,
    }
}
export function memorizeAction(value) {
    return {
        type: ACTION_VALUE,
        payload: value,
    }
}
memorizeAction.PropTypes = {
    value: PropTypes.string.isRequired,
}

export function calculateAction(value, memorized, action) {
    let result;

    switch (action) {
        case '+':
            result = parseFloat(memorized) + parseFloat(value);
            break;
        case '-':
            result = parseFloat(memorized) - parseFloat(value);
            break;
        case '/':
            result = parseFloat(memorized) / parseFloat(value);
            break;
        case '*':
            result = parseFloat(memorized) * parseFloat(value);
            break;
        default:
            result = 0;
    }
    return {
        type: CALCULATE_VALUE,
        payload: parseFloat(result),
    }
}
calculateAction.PropTypes = {
    value: PropTypes.number.isRequired,
    memorized: PropTypes.number.isRequired,
    action: PropTypes.string.isRequired,
}

export function clearAll() {
    return {
        type: CLEAR_ALL,
    }
}