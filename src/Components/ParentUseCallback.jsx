import React, { useCallback, useState } from 'react';
import Child from './Child';

export default function ParentUseCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(()=>{
    console.log('Clicked from child');
  } , [])
  
  return (
    <div className="p-6 max-w-sm mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Parent (No useCallback)</h2>
      <p className="mb-4 text-lg">Count: {count}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow mb-4"
        onClick={() => setCount((c) => c + 1)}
      >
        Increment Count
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}