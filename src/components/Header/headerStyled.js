import styled from 'styled-components'

export const HedaerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => props.bgcolor==='dark' ? '#0f0f0f' : '#efefef'};
  padding: 10px 60px 10px;
`
export const WebsitelogoHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
` 

export const CompanyLogo = styled.img`
  height: 40px;
  width: 50px;
`
export const DashBoardHeading = styled.h1`
  color: ${props => props.bgcolor==='dark'? '#ffffff' : '#0f0f0f'};
  font-size: 30px;
  font-family: 'Roboto';
  margin-left: 5px;
`

export const ThemeLogoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Themebutton = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`
export const LogOutButton = styled.div`
  color: #3b82f6;
  border: 2px solid #3b82f6;
  padding: 10px;
  border-radius: 2px;
  cursor: pointer;
  background-color: transparent;
  margin-left: 40px;
`
export const LogoutPopUpContainer = styled.div`
  background-color: ${props =>
    props.bgcolor === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 0px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 100%;
    padding: 5px;
  }
`

export const PopUpQuestion = styled.p`
  color: ${props => (props.bgcolor === 'dark' ? '#ffffff' : '#00306e')};
  font-family: 'Roboto';
  font-size: 20px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 12px;
  }
`
export const PopUpButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`
export const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid #94a3b8;
  color: #94a3b8;
  font-family: 'Roboto';
  font-weight: 500;
  cursor: pointer;
  font-size: 18px;
  padding: 10px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    padding: 7px;
    font-size: 12px;
  }
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border-width: 0px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  cursor: pointer;
  font-size: 18px;
  padding: 10px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    padding: 7px;
    font-size: 12px;
  }
`