import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export const SliderComponent = ({ handleChange, loanOptions }) => {
  return (
    <>
      <div>
        <p>Slider with fixed values</p>
        <Slider
          onChange={handleChange}
          defaultValue={50}
          marks={{
            0: `${loanOptions[0].toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}`,
            25: '',
            50: '',
            75: '',
            100: `${loanOptions[4].toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}`
          }}
          step={null}
        />
      </div>
    </>
  )
}
