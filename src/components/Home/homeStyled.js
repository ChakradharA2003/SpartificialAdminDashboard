import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`

export const NavSection = styled.div`
  width: 20%;
  height: 100%;
`
export const HomeSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.changecolor==='dark'? '#212121': '#ffffff'}
`
export const HomeKpiBoxes = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px;
  width: 100%;
  margin: 15px;
  align-self: center;
`