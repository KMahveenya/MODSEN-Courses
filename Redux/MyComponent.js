import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter, clearCounter } from './store/counter/actions'

const CounterComponent = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);

  const handleIncrement = () => {
    dispatch(incrementCounter());
  }

  const handleDecrement = () => {
    dispatch(decrementCounter());
  }

  const handleClear = () => {
    dispatch(clearCounter());
  }

  return (
    <>
        <p>{counter}</p>
        <button onClick={handleIncrement}>Инкремент</button>
        <button onClick={handleDecrement}>Декремент</button>
        <button onClick={handleClear}>Обнуление</button>
    </>
  );
};

export default CounterComponent;