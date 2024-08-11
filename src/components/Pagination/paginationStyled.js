import styled from 'styled-components'

export const PaginationButtonsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 60px;
    list-style-type: none;
`
export const PageButton = styled.button`
    width: 40px;
    height: 40px;
    font-family: inherit;
    font-weight: 600;
    font-size: 16px;
    margin: 0 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: ${props => props.state==='active'? '#2980b9' : 'transparent'};
    color: ${props => props.theme==='dark'? '#ffffff': '#0f0f0f'};
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.theme==='dark'? '#ffffff': '#0f0f0f'};
`