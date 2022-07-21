import { useState } from 'react';
import ProTypes from 'prop-types';

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState( value );
  const handleAdd = () => {
    setCounter(counter + 1);
    // setCounter( (counter) => counter + 1 )
  };
  const handleSubst = () => {
    setCounter(counter - 1)
  }
  const handleReset = () => {
    setCounter(value)
  }
  return (
    <>
      <h1> Counter App</h1>
      <h2> {counter} </h2>
      <button onClick={ handleAdd }>+1</button>
      <button onClick={ handleSubst }>-1</button>
      <button onClick={ handleReset }>reset</button>
    </>
  );
};

CounterApp.proTypes = {
  value: ProTypes.number.isRequired,
};
