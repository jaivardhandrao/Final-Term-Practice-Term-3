import React from 'react';

const Child = React.memo(({ onClick }) => {
  console.log('Child rendered');

  return (
    <button
      className="bg-green-500 text-white px-4 py-2 rounded-xl shadow"
      onClick={onClick}
    >
      Click Me (Child)
    </button>
  );
});

export default Child;
