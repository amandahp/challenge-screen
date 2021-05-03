import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { ThemeProvider } from 'styled-components'
import themePontte from 'theme/theme'

const mockStore = configureStore([])

import '@testing-library/jest-dom/extend-expect'

import { HomeScreen } from './HomeScreen'

describe('<HomeScreen />', () => {
  let store

  beforeEach(() => {
    store = mockStore({
      homeReducer: {
        data: {
          prazos: [6, 9],
          valoresEmprestimo: [70, 85, 90, 100, 120],
          valoresEmprestimeBruto: [78, 95],
          parcelas: [
            [2287.12, 2736.97, 3173.81, 3605.04, 4036.26],
            [1848.68, 2208.55, 2558.02, 2903, 3247.98],
            [1848.68, 2208.55, 2558.02, 2903, 3247.98]
          ]
        }
      }
    })
  })

  it('should render the heading', () => {
    render(
      <Provider store={store}>
        <HomeScreen />{' '}
      </Provider>
    )
    expect(
      screen.getByRole('heading', {
        name: /Selecione a quantidade de parcelas/i
      })
    ).toBeInTheDocument
  })
  it('should render the heading button', () => {
    render(
      <Provider store={store}>
        <HomeScreen />{' '}
      </Provider>
    )

    expect(
      screen.getByRole('button', {
        name: /Gostei, continuar/i
      })
    ).toBeInTheDocument
  })
  it('should render the heading', () => {
    render(
      <Provider store={store}>
        <HomeScreen />{' '}
      </Provider>
    )
    expect(
      screen.getByRole('heading', {
        name: /Valor Solicitado/i
      })
    ).toBeInTheDocument
  })

  it('should render matching the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <ThemeProvider theme={themePontte}>
          <HomeScreen />
        </ThemeProvider>
      </Provider>
    )
    expect(container).toMatchSnapshot()
  })
})
