import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { StoreProvider } from './app/providers/StoreProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider>
    <App />
  </StoreProvider>,
)