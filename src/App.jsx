import logo from './logo.svg'
import { AppHeader, AppMain, AppSection, Logo } from './styles'

import { Game } from './components'

const App = () => {
  return (
    <AppMain>
      <AppHeader>
        Modern React Minesweeper <Logo width='64' src={logo} alt='react logo'/>
      </AppHeader>
      <AppSection>
        <Game />
      </AppSection>
    </AppMain>
  )
}

export default App
