import React , {useRef , useMemo , createContext , useContext , useState , useEffect} from 'react'

export default function StopWatchUseRef() {
  const [time, setTime] = useState(0);
  const timerRef = useRef("0s");
  const [intervalId, setIntervalId] = useState(null);

  console.log("component rerendered");

  const start = () => {
    if (intervalId) return;
    // const id = setInterval(() => setTime((t) => t + 1), 1000); //old code
    
    const id = setInterval(() => {
        const newValue = parseInt(timerRef.current.innerText) + 1;
        timerRef.current.innerText = newValue.toString() + "s";
        return newValue;
    }, 1000);

    setIntervalId(id); // 🔁 state update triggers re-render
  };

  const pause = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const reset = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    timerRef.current.innerText = "0";
  };

  return (
    <div className="p-6 max-w-sm mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Stopwatch (with useRef)</h2>
      <div className="text-4xl font-mono mb-4" ref={timerRef} >{time}s</div>
      <div className="space-x-2">
        <button onClick={start} className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow">Start</button>
        <button onClick={pause} className="bg-yellow-500 text-white px-4 py-2 rounded-xl shadow">Pause</button>
        <button onClick={reset} className="bg-red-500 text-white px-4 py-2 rounded-xl shadow">Reset</button>
      </div>
    </div>
  );
}
