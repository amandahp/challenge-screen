import React from 'react'

export const ButtonInstallment = ({
  valueMonth = '',
  valueInstallment = ''
}) => {
  return (
    <>
      <button>
        <h4>{valueMonth}</h4>
        <h3>
          {valueInstallment.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </h3>
      </button>
    </>
  )
}
