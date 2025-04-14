import React, { useState } from 'react';

export default function FormWithUseRef() {
  const [fields, setFields] = useState(['']);

  console.log(fields);
  

  const handleChange = (index, value) => {
    const updated = [...fields];
    updated[index] = value;
    setFields(updated); // 💥 triggers re-render every time
  };

  const handleSubmit = () => {
    alert(JSON.stringify(fields));
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Dynamic Form (useState)</h2>
      {fields.map((value, i) => (
        <input
          key={i}
          value={value}
          onChange={(e) => handleChange(i, e.target.value)}
          className="border p-2 rounded w-full"
          placeholder={`Field ${i + 1}`}
        />
      ))}
      <div className="flex gap-4">
        <button
          onClick={() => setFields([...fields, ''])}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl"
        >
          Add Field
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded-xl"
        >
          Submit
        </button>
      </div>
    </div>
  );
}