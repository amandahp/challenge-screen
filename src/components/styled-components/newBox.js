import styled from 'styled-components'

export const NewBox = styled.div`
  ${({ theme }) => `
  margin-bottom: 25px;
  align-items: center;
  flex-direction: column;
  h5{
      margin-top: 40px;
      font-family: 'Lato', sans-serif;
      font-size:120%;
      color: ${theme.color?.purple}
  }

  `}
`
