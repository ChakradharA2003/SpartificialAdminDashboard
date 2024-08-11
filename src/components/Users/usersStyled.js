import styled from 'styled-components'

export const UsersMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`
export const NavSection = styled.div`
  width: 20%;
`
export const UsersSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.changecolor==='dark'? '#212121': '#ffffff'}
`
export const KpiBoxesList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0px;
`
export const Table = styled.table`
  width: 100%;
  background-color: white;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: auto;
`;

export const Thead = styled.thead`
  background-color: #2980b9;
  color: white;
`;

export const Th = styled.th`
  padding: 15px;
  text-align: left;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #ccc;
`;

export const Td = styled.td`
  padding: 15px;
  text-align: left;
`
export const ControlButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const EditButton = styled.button`
  background-color: #3498db;
  border-width: 0px;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;
  font-weight: bold;
  font-family: 'Roboto';
  margin-right: 7px;
`
export const BanButton = styled.button`
  background-color: #e74c3c;
  border-width: 0px;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;
  font-weight: bold;
  font-family: 'Roboto';
  margin-left: 7px;
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
export const PopUpContainer = styled.div`
  background-color: ${props =>
    props.changecolor === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 0px;
  height: 500px;
  width: 500px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 100%;
    padding: 5px;
  }
`