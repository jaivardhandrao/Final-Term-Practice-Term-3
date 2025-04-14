import React , {useRef , useMemo , createContext , useContext , useState , useEffect} from 'react'

export default function SimpleFormUseRef() {
//   const [inputValue, setInputValue] = useState('');

    const inputValueRef = useRef(null);
  const [submittedValue, setSubmittedValue] = useState('');


  console.log("component rerendered");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(inputValueRef.current.value);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Form (useState)</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-xl shadow mb-4"
        //   value={inputValue.current.value}
            ref={inputValueRef}
        //   onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-xl shadow hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {submittedValue && (
        <p className="mt-4 text-center text-gray-700">
          Submitted: <strong>{submittedValue}</strong>
        </p>
      )}
    </div>
  );
}