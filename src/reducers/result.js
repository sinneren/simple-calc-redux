import { CHANGE_VALUE, MEMORIZE_VALUE, ACTION_VALUE, CALCULATE_VALUE, CLEAR_ALL } from '../constants';

const initialState = {
    result: '',
    stored: 0,
    action: null,
}

export function resultReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_VALUE:
            return {
                ...state,
                result: state.result + '' + action.payload,
            }
        case MEMORIZE_VALUE:
            return {
                ...state,
                result: '',
                stored: state.result,
            }
        case ACTION_VALUE:
            return {
                ...state,
                action: action.payload,
            }
        case CALCULATE_VALUE:
            return {
                ...state,
                action: null,
                stored: action.payload,
                result: action.payload,
            }
        case CLEAR_ALL:
            return initialState;
        default:
            return state;
    }
}