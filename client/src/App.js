import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Context from './utils/Context'

function App() {
   const [triviaData, setTriviaData] = useState('')

   return (
      <div>
         <Context.Provider value={{triviaData, setTriviaData}}>
            <header>
               <h2>Globe Trotters</h2>
            </header>
            <main>
               <Outlet />
            </main>
         </Context.Provider>
      </div>
  );
}

export default App;
