import ReactDOM from 'react-dom/client'
import App from './app/App'
import { StoreProvider } from './app/providers/StoreProvider'
import { BrowserRouter } from 'react-router-dom'
import './app/styles/index.sass';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>,
)
