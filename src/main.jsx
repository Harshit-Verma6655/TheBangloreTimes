import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NewsContext from './context/NewsContext.jsx'
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NewsContext> <ThemeProvider>
      <App />
    </ThemeProvider></NewsContext>
  </BrowserRouter>

)
