import  Header  from '@/widgets/Header'
import './styles/index.sass'
import { classNames } from '@/shared/lib/classNames/classNames'
import MainPage from '@/pages/Main'

function App() {

  return (
    <div className={classNames('app')}>
        <Header />
        <MainPage />
    </div>
  )
}

export default App
