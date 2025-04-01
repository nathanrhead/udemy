import { useState } from 'react';
import { data } from '../../../data';
const ReducerBasics = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => setPeople( people.filter(person => person.id !== id));
  const resetList = () => setPeople(data);

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {!people.length ?
      (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          reset list
        </button>
      )
      :
      (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={() => setPeople([])}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
