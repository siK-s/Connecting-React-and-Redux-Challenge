import React from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component {
  render() {
    const addOne = {type: 'ADD_ONE'};
    const removeOne = {type: 'REMOVE_ONE'};
    const addTen = {type: 'ADD_TEN'};
    const removeTen = {type: 'REMOVE_TEN'};
    const reset = {type: 'RESET'};
    const {count, dispatch} = this.props;

    return (
      <>
        <header>{count}</header>
        <main>
          <button onClick={() => dispatch(addOne)}>+ 1</button>
          <button onClick={() => dispatch(removeOne)}>- 1</button>
          <button onClick={() => dispatch(addTen)}>+ 10</button>
          <button onClick={() => dispatch(removeTen)}>- 10</button>
          <button onClick={() => dispatch(reset)}>Reset</button>
        </main>
      </>
    );
  }
}
const mapStateToProps = state => ({
  count: state,
});

const CounterContainer = connect(mapStateToProps)(Counter);
export default CounterContainer;
