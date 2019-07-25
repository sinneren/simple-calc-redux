import React from 'react';
import Button from '../../components/Button';
import PropTypes from 'prop-types';

const ButtonContainer = props => {
    const clickHandlerCase = (value) => {
        switch (value) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case '.':
                props.changeResult(value);
                break;
            case '/':
                props.memorizeResult();
                props.memorizeAction(value);
                break;
            case '*':
                props.memorizeResult();
                props.memorizeAction(value);
                break;
            case '+':
                props.memorizeResult();
                props.memorizeAction(value);
                break;
            case '-':
                props.memorizeResult();
                props.memorizeAction(value);
                break;
            case '=':
                props.calculateAction(props.result,props.stored,props.action);
                props.memorizeAction(value);
                break;
            case 'clr':
                props.clearAll();
                break;
            default:
                return false;
        }
    }
    return (
        <>
            <div>
                <Button text="7" value={7} clickHandler={clickHandlerCase} />
                <Button text="8" value={8} clickHandler={clickHandlerCase} />
                <Button text="9" value={9} clickHandler={clickHandlerCase} />
            </div>
            <div>
                <Button text="4" value={4} clickHandler={clickHandlerCase} />
                <Button text="5" value={5} clickHandler={clickHandlerCase} />
                <Button text="6" value={6} clickHandler={clickHandlerCase} />
            </div>
            <div>
                <Button text="1" value={1} clickHandler={clickHandlerCase} />
                <Button text="2" value={2} clickHandler={clickHandlerCase} />
                <Button text="3" value={3} clickHandler={clickHandlerCase} />
            </div>
            <div>
                <Button text="0" value={0} clickHandler={clickHandlerCase} />
                <Button text="." value={'.'} clickHandler={clickHandlerCase} />
                <Button text="Enter" value={'='} clickHandler={clickHandlerCase} />
                <Button text="C" value={'clr'} clickHandler={clickHandlerCase} />
            </div>
            <div>
                <Button text="/" value={'/'} clickHandler={clickHandlerCase} />
                <Button text="*" value={'*'} clickHandler={clickHandlerCase} />
                <Button text="-" value={'-'} clickHandler={clickHandlerCase} />
                <Button text="+" value={'+'} clickHandler={clickHandlerCase} />
            </div>
        </>
    )
}
ButtonContainer.propTypes = {
    result: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    stored: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    action: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
export default ButtonContainer;