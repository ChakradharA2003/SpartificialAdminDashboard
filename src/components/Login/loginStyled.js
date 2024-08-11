import styled from 'styled-components'

export const Logincontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #111212;
  background-size: cover;
  height: 100vh;
`
export const LoginCard = styled.div`
   display: flex;
   flex-direction: row;
   width: 60%;
   height: 60%;
   border-collapse: collapse;
   @media screen and (max-width: 767px) and (orientation: portrait){
   display: flex;   
   flex-direction: row;
   width: 90%;
   }
`
export const CompanyImage = styled.img`
   width: 60%;
   height: 100%;
   order: -1;
   @media screen and (max-width: 767px) and (orientation: portrait){
   display: none;
   }
`
export const LoginForm = styled.div`
  height: 100%;
  width: 40%;
  background-color: #ffffff;
  box-shadow: 0px 0px 0px #efefef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px 0px;
  order: 0;
  @media screen and (max-width: 767px) and (orientation: portrait){
   width: 100%;
   }
`
export const FormHeading = styled.h1`
  color: #ofofof;
  font-size: 30px;
  font-family: 'Roboto';
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const InputLabel = styled.label`
  color: #0f0f0f;
  font-size: 15px;
  font-family: 'Roboto';
`
export const InputFeild = styled.input`
  border: 1px solid #0f0f0f;
  padding: 8px 5px 8px 10px;
  width: 250px;
  border-radius: 5px;
  outline: none;
`
export const CheckBoxContainer = styled.div`
  margin-top: 0px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  margin-left: 30px;
  @media screen and (max-width: 767px) and (orientation: portrait){
   margin-left: 10px;
   }
`

export const LoginButton = styled.button`
  background-color: #69058e;
  width: 270px;
  text-align: center;
  border-width: 0px;
  border-radius: 5px;
  color: #ffffff;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
`