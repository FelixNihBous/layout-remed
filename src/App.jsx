import { useState } from 'react'
import './App.css'
import Section1 from './pages/Section1'
import Section2 from './pages/Section2'
import Section3 from './pages/Section3'
import Section4 from './pages/Section4'
import Section5 from './pages/Section5'
import Footer from './pages/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </>
  )
}

export default App
