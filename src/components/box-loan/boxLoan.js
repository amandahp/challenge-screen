import React from 'react'

import * as Styled from './box-loan.styled'

export const BoxLoan = ({ valueLoan = '', valueRaw = '' }) => {
  return (
    <Styled.BoxLoan>
      <span>
        <h2>
          {valueLoan.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </h2>
        <Styled.Box>
          <h3>
            Valor bruto:
            {valueRaw.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </h3>
          <button>?</button>
        </Styled.Box>
      </span>
    </Styled.BoxLoan>
  )
}
