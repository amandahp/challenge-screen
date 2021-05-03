import React from 'react'

import * as Styled from './button-installmente.styled'

export const ButtonInstallment = ({
  valueMonth = '',
  valueInstallment = '',
  handleClick
}) => {
  return (
    <>
      <Styled.Button
        onClick={() => {
          handleClick(valueInstallment)
        }}
      >
        <h4>{valueMonth} meses</h4>
        <h2>
          {' '}
          {valueInstallment.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </h2>
      </Styled.Button>
    </>
  )
}
