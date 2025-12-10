import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Acceso from './components/Acceso'
import Menu from './components/Menu'

function App() {

  return (
    <>
    <div className="dashboard">
      <Acceso />
      <Menu />
    </div>
    </>
  )
}

export default App
