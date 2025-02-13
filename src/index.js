import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import { Logo } from '@pmndrs/branding'
import './styles.css'
import { App } from './App'

function Overlay() {
  return <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}></div>
}

createRoot(document.getElementById('root')).render(
  <>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Overlay />
  </>
)
