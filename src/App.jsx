import React from 'react'
import Analytics from './components/Analytics'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Newsletter from './Newsletter'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default App