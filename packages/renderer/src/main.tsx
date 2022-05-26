import { StrictMode } from 'react'
import { HashRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App'
import './samples/electron-store'
import './samples/preload-module'
import 'antd/dist/antd.css'
import './styles/index.css'

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
)

window.removeLoading()
