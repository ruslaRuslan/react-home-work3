import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App
      ad="Ruslan"
      soyad="Zeynalov"
      yas={23}
      seher="Baki"
    />
  </React.StrictMode>,
)
