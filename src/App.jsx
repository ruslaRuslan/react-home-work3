import { useState } from 'react'
import viteLogo from '/vite.svg'
import './components/Index.css'


function App(props) {

  return (
    <>
      <p>AD: {props.ad}</p>
      <p>SOYAD: {props.soyad}</p>
      <p>YAS: {props.yas}</p>
      <p>SEHER: {props.seher}</p>
    </>
  )
}

export default App
