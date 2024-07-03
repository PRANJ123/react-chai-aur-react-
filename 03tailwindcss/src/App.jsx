

import './App.css'
import Card from './components/card.jsx'

function App() {
 

  return (
    <>
     <h1 className='bg-green-400 text-black-400 p-4 rounded-xl mb-4' >Tailwind Classes</h1>
     <Card userName = "Pranjal" btnInput = "Click-here"/>
     <Card/>
     
    </>
  )
}

export default App
