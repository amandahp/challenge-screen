import styled from 'styled-components'

export const Content = styled.div`
  ${({ theme }) => `
    margin: auto;
    width: 80%;
    height: 75%;
    border-radius: 20px;
    position: relative;
    ${theme.bodyLargeLoose}
    background: ${theme.backgroundColor?.primary};
    padding: 170px;
    align-content: center;
    @media(max-width: 986px){
      height: auto;
      width: 80%;
      padding: 100px;
      display:flex;
      flex-direction:column;
    }
  `}
`
