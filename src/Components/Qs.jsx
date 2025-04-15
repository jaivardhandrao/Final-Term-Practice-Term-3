// for routing


// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// const Home = () => <h2 className="text-2xl font-bold">Home Page</h2>;
// const About = () => <h2 className="text-2xl font-bold">About Page</h2>;

// export function Qs() {
//   return (
//     <BrowserRouter>
//       <div className="p-6 bg-gray-100 min-h-screen">
//         <h1 className="text-4xl font-extrabold mb-6">My Website</h1>
//         <nav className="mb-8 space-x-4">
//           <Link to="/">
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Go to Home</button>
//           </Link>
//           <Link to="/about">
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Go to About</button>
//           </Link>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default Qs;




// for useref


// import React, { useRef, useState } from "react";

// export function Qs (){
//   const inpRef = useRef(null);

//   const handleSubmit = () => {
//     alert(`Hello, ${inpRef.current.value}!`);
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto">
//       <input
//         type="text"
//         ref={inpRef}
//         placeholder="Enter your name"
//         className="w-full px-4 py-2 mb-4 border rounded-lg shadow"
//       />
//       <button
//         onClick={handleSubmit}
//         className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg shadow"
//       >
//         Say Hello
//       </button>
//     </div>
//   );
// };

// export default Qs;





// usecallback


// import React, { useCallback, useState } from "react";

// const Child = React.memo(({ handleClick }) => {
//   console.log("Child rendered");
//   return (
//     <button
//       onClick={handleClick}
//       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow"
//     >
//       Click Me (Child)
//     </button>
//   );
// });


// export function Qs() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log("Button clicked!");
//   }, []);

//   return (
//     <div className="p-6 max-w-md mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Count: {count}</h2>
//       <button
//         onClick={() => setCount(count + 1)}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow mb-4"
//       >
//         Increment Count
//       </button>
//       <Child handleClick={handleClick} />
//     </div>
//   );
// };

// export default Qs;




//
