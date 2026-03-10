import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.tsx'

const root = createRoot(document.getElementById('root')!)
root.render(<App />)
