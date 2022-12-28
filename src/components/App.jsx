import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './App.scss'
import Header from './Header'
import MainContent from './MainContent'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  )
}

export default App
