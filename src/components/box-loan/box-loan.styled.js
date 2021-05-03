import styled from 'styled-components'

export const BoxLoan = styled.div`
  ${({ theme }) => `
    margin: 0 auto;
    width: 45%;
    height: 10%;
    position: absolute;
    right: 29%;
    top: 15%;
    text-align: center;
    color: ${theme.color?.darkBlue};
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;  
    font-size:1.5em;
    font-family: 'Lato', sans-serif;
    line-height: 1.5;
    button { 
      color: ${theme.color?.darkBlue};
      border:1px solid ${theme.color?.darkBlue};
      background-color: ${theme.color?.light};
      width: 30px;
      height: 30px;
      border-radius: 100%;
      cursor: pointer;
      &:hover{
        background-color:${theme.color?.darkBlue};
        color: ${theme.color?.light};
      };
      &:focus{
        outline: none;
      }
    }
    @media(max-width: 986px){
      position: relative;
      right: 0%;
      margin-bottom: 10px;
    }
    @media(max-width: 500px) {
      font-size: 18px;
    }

  `}
`

export const Box = styled.div`
  ${() => `
  width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  `}
`
