import React, { useMemo, useState } from 'react';

const users = Array.from({ length: 10000 }, (_, i) => `User_${i + 1}`);

export default function FilterUsersWithoutMemo() {
  const [searchTerm, setSearchTerm] = useState('');
  const [otherState, setOtherState] = useState(false);


  const filteredUsers = useMemo(()=>{
      return (users.filter((name) =>{
        console.log("filter triggerd");
        return name.toLowerCase().includes(searchTerm.toLowerCase())
      }))
  } , [searchTerm])
  

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Filter Users (No Memo)</h2>

      <input
        type="text"
        placeholder="Search users..."
        className="w-full px-4 py-2 border rounded-xl mb-4 shadow"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="max-h-[300px] overflow-y-auto border rounded-xl p-4 shadow">
        <ul className="space-y-1 text-sm text-gray-700">
          {filteredUsers.slice(0, 50).map((user, index) => (
            <li key={index} className="hover:text-blue-600">
              {user}
            </li>
          ))}
        </ul>
        {filteredUsers.length > 50 && (
          <p className="text-sm mt-2 text-gray-500">
            ...and {filteredUsers.length - 50} more
          </p>
        )}

      </div>

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