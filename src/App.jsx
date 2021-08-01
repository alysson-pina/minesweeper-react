import logo from './logo.svg'
import './App.css'

import { Game } from './components'

const App = () => {
  return (
    <main className="App">
      <h1>
        Modern React Minesweeper <img width='64' src={logo} className='App-logo' alt='react logo'/>
      </h1>
      <section className="App-header">
        <Game />
      </section>
    </main>
  )
}

export default App
