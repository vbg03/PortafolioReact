import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import Header from "./components/Header/header";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        {/* Otras secciones de tu portafolio */}
      </div>
    </>
  )
}

export default App
