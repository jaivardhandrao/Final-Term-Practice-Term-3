import React , {useRef , useMemo , createContext , useContext , useState , useEffect} from 'react'


export default function DebouncedSearchUseRef() {
  const [searchTerm, setSearchTerm] = useState('');

  const timerRef = useRef(null); // ⏱ store timeout ID
  
  useEffect(() => {
    if (searchTerm.trim() === '') return;

    if (timerRef.current) {
        clearTimeout(timerRef.current);
    }
    
    timerRef.current = setTimeout(() => {
        // Simulate API call
        console.log('Debounced API Call with:', searchTerm);

    }, 2000); 

    // console.log('Calling API with:', searchTerm);

  }, [searchTerm]);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Search (No Debounce vs Debounced)</h2>
      <input
        type="text"
        placeholder="Type to search..."
        className="w-full px-4 py-2 border rounded-xl shadow"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}