import Header from '@/widgets/Header'
import './styles/index.sass'
import { classNames } from '@/shared/lib/classNames/classNames'
import AppRouter from './providers/router'

function App() {

  return (
    <div className={classNames('app')}>
      <Header />
      <AppRouter />
    </div>
  )
}

export default App
