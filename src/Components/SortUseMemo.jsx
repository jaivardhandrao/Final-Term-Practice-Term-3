import React , {useRef , useMemo , createContext , useContext , useState , useEffect} from 'react'

const largeData = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  name: `User ${Math.floor(Math.random() * 10000)}`
}));

export default function SortUseMemo() {
  const [sortBy, setSortBy] = useState('asc');
  const [dummy, setDummy] = useState(false); // Triggers re-renders


  const sortedData = largeData.sort((a, b) =>
    sortBy === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );

  
//   const sortedData = useMemo(() => {
//     console.log("Sorting triggered");
//     return largeData.sort((a, b) =>
//       sortBy === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
//     );
//   }, [sortBy]);

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Sort Without useMemo</h2>
      <div className="flex gap-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-xl"
          onClick={() => setSortBy(sortBy === 'asc' ? 'desc' : 'asc')}
        >
          Toggle Sort ({sortBy})
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-xl"
          onClick={() => setDummy(!dummy)}
        >
          Dummy Rerender
        </button>
      </div>
      <ul className="h-64 overflow-y-scroll border p-2 rounded">
        {sortedData.slice(0, 20).map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}