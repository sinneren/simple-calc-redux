import * as actions from './resultActions';
import * as types from '../constants';

describe('actions result', () => {
    it('should changed value of result', () => {
        const value = 5;
        const expectedAction = {
            type: types.CHANGE_VALUE,
            payload: 5
        }
        expect(actions.changeValue(value)).toEqual(expectedAction)
    })
    it('should expected type', () => {
        const expectedAction = {
            type: types.MEMORIZE_VALUE,
        }
        expect(actions.memorizeValue()).toEqual(expectedAction)
    })
    it('should changed action value type', () => {
        let value = '=';
        const expectedAction = {
            type: types.ACTION_VALUE,
            payload: value,
        }
        expect(actions.memorizeAction(value)).toEqual(expectedAction);
    })
    it('should correct action when clear', () => {
        const expectedAction = {
            type: types.CLEAR_ALL,
        }
        expect(actions.clearAll()).toEqual(expectedAction);
    })
    it('should correct calculate action', () => {
        const value = 5;
        const expectedAction = {
            type: types.CALCULATE_VALUE,
            payload: value
        }
        expect(actions.calculateAction(5, 10, '-')).toEqual(expectedAction);
        expect(actions.calculateAction(2, 3, '+')).toEqual(expectedAction);
        expect(actions.calculateAction(2.5, 2, '*')).toEqual(expectedAction);
        expect(actions.calculateAction(10, 50, '/')).toEqual(expectedAction);
        expect(actions.calculateAction(-10, 15, '+')).toEqual(expectedAction);
        expect(actions.calculateAction(-2.5, -2, '*')).toEqual(expectedAction);
    })
})