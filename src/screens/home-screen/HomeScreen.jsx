import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from 'store/ducks/home/actions'

import { Loader } from 'components/loader/loader'
import * as C from 'components'
import * as Styled from 'components/styled-components'

export const HomeScreen = () => {
  const [loanValue, setLoan] = useState('')
  const [rawLoanValue, setRawLoanValue] = useState('')
  const [installmentValue, setInstallmentValue] = useState('')
  const [selectedInstallment, setSelectedInstallment] = useState('')

  const dispatch = useDispatch()

  const data = useSelector((state) => state.homeReducer.data)
  const loading = useSelector((state) => state.homeReducer.loading)
  const error = useSelector((state) => state.homeReducer.error)

  const { valoresEmprestimo, parcelas, valoresEmprestimeBruto, prazos } = data

  const setInitialValues = useCallback(() => {
    setLoan(valoresEmprestimo[2])
    setRawLoanValue(valoresEmprestimeBruto[2])
    setInstallmentValue(parcelas[2].reverse())
  }, [valoresEmprestimo, valoresEmprestimeBruto, parcelas])

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  useEffect(() => {
    if (data) {
      setInitialValues()
    }
  }, [data, setInitialValues])

  const handleChangeSlider = (value) => {
    switch (value) {
      case 0:
        setLoan(valoresEmprestimo[0])
        setRawLoanValue(valoresEmprestimeBruto[0])
        setInstallmentValue(parcelas[0].reverse())
        break
      case 25:
        setLoan(valoresEmprestimo[1])
        setRawLoanValue(valoresEmprestimeBruto[1])
        setInstallmentValue(parcelas[1].reverse())
        break
      case 50:
        setLoan(valoresEmprestimo[2])
        setRawLoanValue(valoresEmprestimeBruto[2])
        setInstallmentValue(parcelas[2].reverse())
        break
      case 75:
        setLoan(valoresEmprestimo[3])
        setRawLoanValue(valoresEmprestimeBruto[3])
        setInstallmentValue(parcelas[3].reverse())
        break
      case 100:
        setLoan(valoresEmprestimo[4])
        setRawLoanValue(valoresEmprestimeBruto[4])
        setInstallmentValue(parcelas[4].reverse())
        break
    }
  }

  const handleSelectInstallment = (installment) => {
    setSelectedInstallment(installment)
  }

  const handleSubmit = () => {
    console.log(selectedInstallment, loanValue)
  }

  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.Span>
          <h4>Valor Solicitado</h4>
        </Styled.Span>
        {valoresEmprestimo && !loading ? (
          <>
            <Styled.NewBox>
              <C.BoxLoan valueLoan={loanValue} valueRaw={rawLoanValue} />
              <C.SliderComponent
                loanOptions={valoresEmprestimo}
                handleChange={handleChangeSlider}
              />
              <Styled.Text>
                <h5>Selecione a quantidade de parcelas</h5>
              </Styled.Text>
            </Styled.NewBox>
            <Styled.Container>
              {prazos.map((prazo, index) => {
                return (
                  <C.ButtonInstallment
                    key={index + 1}
                    handleClick={handleSelectInstallment}
                    valueMonth={prazo}
                    valueInstallment={installmentValue[index]}
                  />
                )
              })}
            </Styled.Container>
            <Styled.Box>
              <Styled.Button onClick={() => handleSubmit()}>
                Gostei, continuar
              </Styled.Button>
              <h6>
                Taxa de 1.09% ao mês. Valor da primeira - Sistema de
                Automatização constante (suas parcelas diminuem com o tempo)
              </h6>
            </Styled.Box>
          </>
        ) : (
          <Styled.Box>
            <Loader />
          </Styled.Box>
        )}
        {error && <p>erro</p>}
      </Styled.Content>
    </Styled.Wrapper>
  )
}
