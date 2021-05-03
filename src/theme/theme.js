const baseValueToRem = (multiplicator) => {
  return `${multiplicator / 4}rem`
}

const defaultValues = {
  color: {
    primary: '#15C4F4',
    secondary: '#089BC4',
    darkBlue: '#03033A',
    purple: '#850083',
    light: '#FFFFFF'
  },

  backgroundColor: {
    primary: '#FFFFFF'
  }
}

const secondaryStyles = `
    text-transform: none;
    font-style: normal;
    letter-spacing:  ${baseValueToRem(0)};
`

const theme = {
  ...defaultValues,

  bodyLargeLoose: `
    ${secondaryStyles}

  `
}

export default theme
