import styled from 'styled-components'

export const Wrapper = styled.div`
  ${() => `
    width: 100%;
    height: 100vh;
    background: rgb(97,0,135);
    background: linear-gradient(90deg, rgba(97,0,135,1) 33%, rgba(77,0,140,1) 73%, rgba(56,0,144,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center
    flex-direction: column;
    @media(max-width: 800px){
      height: auto;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center
      flex-direction: column;
    }

  `}
`
