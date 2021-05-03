import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { ThemeProvider } from 'styled-components'

import App from './App'

import store from './store/initializeStore'
import themePontte from 'theme/theme'

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={themePontte}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
