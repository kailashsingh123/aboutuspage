import { useState } from 'react'

import { Footer } from './components/Footer/Footer'
import {About} from './components/About'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <About/>
        {/* <h1 className='bg-orange-500 text-white'>Rishi Markandey Mahadev Jee</h1> */}
     <Footer/>
    </div>   
    </>
  )
}

export default App
