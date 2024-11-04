import React from 'react'
import './App.css'
import { Access, Blog, Footer, Future, Header, Hero, Logo , Myapps, Register, What, Whatisgpt} from './container'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Logo />
      <What />
      <Future />
      <Myapps />
      <Register />
      <Blog />
      <Access />
      <Footer />
      
    </div>
  )
}

export default App