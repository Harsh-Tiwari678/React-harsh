import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( // root element create kara and use pakad ke div mein daal diya 
   <App /> // fir render kar diya 
  
)
