import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Context from './utils/Context'
import Navbar from './components/Navbar'
import test_data from './utils/test_data.json'

function App() {
   const [userData, setUserData] = useState(localStorage.userData)
   const [placeData, setPlaceData] = useState(test_data)

   return (
      <div>
         <Context.Provider value={{placeData, setPlaceData, userData, setUserData}}>
            <header>
               <Navbar />
            </header>
            <main>
               <Outlet />
            </main>
         </Context.Provider>
      </div>
  );
}

export default App;
