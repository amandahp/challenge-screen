import styled from 'styled-components'

export const Span = styled.span`
  ${({ theme }) => `
    margin: 0 auto;
    border-radius: 10px;
    width: 45%;
    height: 10%;
    position: absolute;
    top: -4%;
    right: 29%;
    text-align: center;
    ${theme.bodyLargeLoose}
    color: ${theme.color?.light};
    background: ${theme.color?.darkBlue};
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    h4 {
      font-size:1.5em;
      font-family: 'Lato', sans-serif;
    }
    @media(max-width:976px) {
      top:0;
    }
  `}
`
