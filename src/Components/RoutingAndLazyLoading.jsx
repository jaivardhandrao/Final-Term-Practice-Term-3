import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Suspense, lazy } from 'react'

// with lazy
const Home = lazy(() => import('./pages/Home'))

//wihtout lazy
// import Home from "./pages/Home"

const NotFound = lazy(()=> import('./NotFound'))


const About = lazy(() => import('./pages/About'))

export default function RoutingAndLazyLoading() {
  return (
    <Router>
      <div className="p-6 bg-gray-100 min-h-screen">
        <nav className="mb-4 space-x-4">
          <Link to="/" className="text-blue-500 hover:underline">Home</Link>
          <Link to="/about" className="text-blue-500 hover:underline">About</Link>
        </nav>
    
    {/* home and about page are not available, this is only for learning */}
        <Suspense fallback={<NotFound/>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}