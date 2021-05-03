import styled from 'styled-components'

export const Container = styled.div`
  ${() => `
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  grid-auto-rows: repeat(5, minmax(100px, auto))
  margin-top: -90;

  @media(max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
  }
  `}
`
