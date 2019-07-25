import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import InputContainer from './containers/InputContainer';
import ButtonsContainer from './containers/ButtonsContainer';
import { changeValue, memorizeValue, memorizeAction, calculateAction, clearAll } from './actions/resultActions';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container as BContainer, Content as BContent, Columns, Heading } from 'react-bulma-components';

class App extends Component {
  render() {
    return (
      <BContainer>
        <BContent>
          <Columns>
            <Columns.Column size={3} offset={4}>
              <Heading>
                Калькулятор
              </Heading>
              <InputContainer result={this.props.result} changeResult={this.props.changeResult} />
            </Columns.Column>
          </Columns>
          <Columns>
            <Columns.Column size={3} offset={4}>
              <ButtonsContainer
                result={this.props.result}
                stored={this.props.stored}
                action={this.props.action}
                changeResult={this.props.changeResult}
                memorizeResult={this.props.memorizeResult}
                memorizeAction={this.props.memorizeAction}
                calculateAction={this.props.calculateAction}
                clearAll={this.props.clearAll}
                />
            </Columns.Column>
          </Columns>
        </BContent>
      </BContainer>
    )
  }
}

const  mapStateToProps = state => {
  const { result, stored, action } = state.resultReducer;
  return { result, stored, action };
}
const mapDispatchToProps = dispatch => {
  return {
    changeResult: value => dispatch(changeValue(value)),
    memorizeResult: () => dispatch(memorizeValue()),
    memorizeAction: value => dispatch(memorizeAction(value)),
    calculateAction: (value, memorized, action) => dispatch(calculateAction(value, memorized, action)),
    clearAll: () => dispatch(clearAll()),
  }
}

App.propTypes = {
  result: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  stored: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  action: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  changeResult: PropTypes.func.isRequired,
  memorizeResult: PropTypes.func.isRequired,
  memorizeAction: PropTypes.func.isRequired,
  calculateAction: PropTypes.func.isRequired,
  clearAll: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)