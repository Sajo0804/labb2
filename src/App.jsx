import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarWarsPeople from '../components/StarWarsPeople'
import Greeting from '../components/Greeting'
import Header from '../components/Header'
import ContactForm from '../components/Contactform'
import CountVisits from '../components/CountVisitors'
import StarWarsCallback from '../components/StarWarsCallback'




function App() {



  return (
    <>
      <Header />
      <CountVisits/>
      <Greeting />
      <StarWarsPeople />
      <ContactForm />
      <StarWarsCallback />



    </>
  )
}

export default App;

