import React , {useRef , useMemo , createContext , useContext , useState , useEffect} from 'react'
import Fibonacci from './Components/FibonacciUseMemo'
import FilterUsersWithoutMemo from './Components/FilterListUseMemo'
import DebouncedSearchUseRef from './Components/DebouncedSearchUseRef'
import SimpleFormUseRef from './Components/SimpleFormUseRef'
import StopWatchUseRef from './Components/StopWatchUseRef'
import ParentUseCallback from './Components/ParentUseCallback'
import ThemeUseContext from './Components/ThemeUseContext'
import { ThemeProvider } from './Contexts/ThemeContext.jsx'
import InputFocus from './Components/InputFocus.jsx'
import FormWithUseRef from './Components/FormWithUseRef.jsx'
import SortUseMemo from './Components/SortUseMemo.jsx'
import Qs from './Components/Qs.jsx'
function App() {



  return (
    <>
    {/* <Fibonacci/> */}
    {/* <FilterUsersWithoutMemo></FilterUsersWithoutMemo> */}
    {/* <DebouncedSearchUseRef></DebouncedSearchUseRef> */}
    {/* <SimpleFormUseRef></SimpleFormUseRef> */}
    {/* <StopWatchUseRef></StopWatchUseRef> */}
    {/* <ParentUseCallback></ParentUseCallback> */}
    {/* <ThemeProvider>

      <ThemeUseContext></ThemeUseContext>

    </ThemeProvider> */}

    {/* <InputFocus></InputFocus> */}
    {/* <FormWithUseRef></FormWithUseRef> */}
    {/* <SortUseMemo></SortUseMemo> */}
    <Qs></Qs>
    </>
  )
}

export default App