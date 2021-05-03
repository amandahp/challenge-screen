import styled from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => `
    background-color: ${theme.color?.light};
    font-family: 'Lato', sans-serif;
    width: 100%;
    height: 185%;
    border-radius: 10px;
    cursor: pointer;
    border:1px solid ${theme.color?.darkBlue};
    h3 {
      font-weight: bold;
      font-size: 1em;
    }
    &:hover{
      background-color: ${theme.color?.darkBlue};
      color: ${theme.color?.light};
    };
    &:focus{
      background-color: ${theme.color?.darkBlue};
      color: ${theme.color?.light};
      outline: none;
    };
    @media(max-width: 800px){

    }

  `}
`
