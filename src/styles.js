import styled from 'styled-components'

export const AppMain = styled.main`
  width: 100%;
  text-align: center;
`

export const AppTitleStyle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 0;
  padding: 16px 0;
  width: 100%;
`

export const AppHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 0;
  padding: 16px 0;
  width: 100%;
`

export const AppTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 0;
  padding: 16px 0;
  width: 100%;
`

export const AppSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
`

export const Logo = styled.img`
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
      animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
