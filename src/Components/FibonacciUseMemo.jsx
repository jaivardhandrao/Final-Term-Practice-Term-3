import React , {useRef , useMemo , createContext , useContext , useState , useEffect} from 'react'

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export default function FibonacciWithoutMemo() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  function computeFibonacci() {
    console.log('Compute Fibonacci triggered for ' + count);
    return fibonacci(count);
  }

  // with usememo 

  const result = useMemo(()=>{
    return computeFibonacci();
  } , [count]) 

//without usememo

  // const result = computeFibonacci();




  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-2xl font-bold">Fibonacci Without useMemo</h2>
      <p className="text-lg">Fibonacci of {count} is {result}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        Next Fibonacci
      </button>
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
            console.log("some other state changed");
            
            setOtherState(!otherState)
        }}
      >
        Toggle State
      </button>
    </div>
  );
}
