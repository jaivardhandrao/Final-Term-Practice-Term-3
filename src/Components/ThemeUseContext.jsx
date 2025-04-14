import React , {useRef , useMemo , createContext , useContext , useState , useEffect} from 'react'
import ThemeContext from '../Contexts/ThemeContext.jsx';

function ThemeUseContext() {


    const {theme , language , setTheme , setLanguage} = useContext(ThemeContext)

  return (
    <div className="p-4 flex flex-col items-center gap-4 bg-gray-100 dark:bg-gray-800 min-h-screen text-gray-900 dark:text-white">

      <div className="text-lg font-semibold">Theme: {theme}</div>
      <div className="text-lg font-semibold">Language: {language}</div>

      <button 
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded shadow"
      >
        Toggle Theme
      </button>

      <button 
        onClick={() => setLanguage(language === 'English' ? 'Spanish' : 'English')}
        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded shadow"
      >
        Toggle Language
      </button>

    </div>
  )
}

export default ThemeUseContext