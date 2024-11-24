import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarWarsPeople from '../components/StarWarsPeople'
import Greeting from '../components/Greeting'
import KeyComponent from '../components/VisitorName'


function App() {

  return (
    <>
      <KeyComponent />

      <Greeting />
      <StarWarsPeople />



    </>
  )
}

export default App
