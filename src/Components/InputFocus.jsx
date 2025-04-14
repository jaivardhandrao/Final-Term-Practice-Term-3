import React , {useRef , useMemo , createContext , useContext , useState , useEffect} from 'react'

export default function InputFocus() {

    const inpRef = useRef(null);

    const handleFocus = () => {
    //   // ❌ Bad practice: directly querying DOM
    //   document.getElementById('myInput')?.focus();

        inpRef.current?.focus();
        // by useRef
    };
  
    return (
      <div className="p-6 max-w-sm mx-auto text-center">
        <input
          id="myInput"
          type="text"
          className="border p-2 rounded mb-4 w-full"
          placeholder="Enter something"
          // this code
          ref={inpRef}
        />
        <br />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-xl"
          onClick={handleFocus}
        >
          Focus Input
        </button>
      </div>
    );
  }