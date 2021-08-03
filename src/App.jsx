import React from 'react'
import logo from './assets/logo.svg'
import { AppHeader, AppMain, AppSection, Logo, AppTitleStyle } from './styles'


import { Game, Instructions } from './components'

const App = () => {
  return (
    <AppMain>
      <AppHeader>
        <AppTitleStyle>
          Modern React Minesweeper <Logo width='64' src={logo} alt='react logo'/>
        </AppTitleStyle>
        <Instructions />
      </AppHeader>
      <AppSection>
        <Game />
      </AppSection>
    </AppMain>
  )
}

export default App
