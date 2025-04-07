import { useReducer } from 'react';
import { initialState, counterReducer } from './reducer';

function Component() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <h2>Status: {state.status}</h2>

      <div className='btn-container'>
        <button onClick={() => dispatch({ type: 'INCREMENT' })} className='btn'>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })} className='btn'>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: 'RESET' })} className='btn'>
          Reset
        </button>
      </div>
      <div className='btn-container'>
        <button
          onClick={() => dispatch({ type: 'SET_STATUS', payload: 'active' })}
          className='btn'
        >
          Set Status to Active
        </button>
        <button
          className='btn'
          onClick={() => dispatch({ type: 'SET_STATUS', payload: 'inactive' })}
        >
          Set Status to Inactive
        </button>
      </div>
    </div>
  );
}
export default Component;

