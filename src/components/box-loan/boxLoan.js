import React from 'react'

export const BoxLoan = ({ valueLoan = '', valueRaw = '' }) => {
  return (
    <>
      <span>
        <h2>
          {valueLoan.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </h2>
        <h3>
          {valueRaw.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </h3>
        <button>?</button>
      </span>
    </>
  )
}
