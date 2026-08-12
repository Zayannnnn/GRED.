import React from 'react'
import ReactDOM from 'react-dom/client'
import ProviderApp from './ProviderApp.jsx'
import '../../style.css'
import './provider.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderApp />
  </React.StrictMode>,
)
