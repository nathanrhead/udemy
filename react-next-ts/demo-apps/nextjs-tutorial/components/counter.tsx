'use client';

import { useState } from 'react';

function Counter () {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col items-center w-[100px]'>
      <h1 className='text-5xl font-bold'>{count}</h1>
      <button onClick={() => setCount(count + 1)} className='bg-blue-500 rounded text-white px-4 py-2 mt-4'>Increment</button>
    </div>
  );
}

export default Counter;
