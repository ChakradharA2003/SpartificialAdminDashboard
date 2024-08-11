import styled from 'styled-components'

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.bgcolor==='dark'? '#0f0f0f': '#2c3e50'}
`

export const NavButton = styled.button`
  color: ${props => props.bgcolor==='dark' ? '#ffffff' : '#0f0f0f'}
  background-color: ${props => props.bgcolor==='dark'? '#5d5d5d' : '#212121'}
  text-align: center;
  text-decoration: none;
  border-width: 0px;
  font-size: 22px;
  font-family: 'Roboto';
  cursor: pointer;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: bold;
  width: 100%;
`
export const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`