import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarWarsPeople from '../components/StarWarsPeople'
import Greeting from '../components/Greeting'
import KeyComponent from '../components/VisitorName'
import Header from '../components/Header'
import ContactForm from '../components/Contactform'




function App() {



  return (
    <>
      <Header />
      <KeyComponent />
      <Greeting />
      <StarWarsPeople />
      <ContactForm />



    </>
  )
}

export default App;

