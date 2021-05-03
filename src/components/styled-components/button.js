import styled from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => `
    background: rgb(97,0,135);
    background: linear-gradient(90deg, rgba(97,0,135,1) 33%, rgba(77,0,140,1) 73%, rgba(56,0,144,1) 100%);
    color: ${theme.color?.light};
    font-family: 'Lato', sans-serif;
    width: 46%;
    height: 60px;
    font-size: 1.2rem;
    font-weight:bold;
    margin-top: -20px;
    border-radius: 30px;
    cursor: pointer;
    border:1px solid ${theme.color?.darkBlue};
    &:hover{
      background-color: ${theme.color?.light};
      color: ${theme.color?.darkBlue};
    };
    &:focus{
      background-color: ${theme.color?.light};
      color: ${theme.color?.darkBlue};
      outline: none;
    };
    @media (max-width:500px) {
      font-size: 0.8rem;
      width:60%;
    }
  `}
`
