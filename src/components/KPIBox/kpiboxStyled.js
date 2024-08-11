import styled from 'styled-components'

export const KPIBoxcontainer = styled.li`
   box-shadow: 0px 1px 1px #efefef;
   background-color: ${props => props.currentTheme==='dark' ? '#ffffff' : '#545353'};
   display: flex;
   flex-direction: column;
   align-items: center;
   border-radius: 12px;
   width: 40%;
   padding: 5px 10px 5px;
   margin: 12px;
`
export const BoxHeading = styled.h1`
  color: ${props => props.currentTheme==='dark'? '#0f0f0f': '#ffffff'};
  font-size: 26px;
  font-family: 'Roboto';
`
export const BoxValue = styled.p`
  color: #2980b9;
  font-size: 24px;
  font-weight: bold;
`