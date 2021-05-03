import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export const SliderComponent = ({ handleChange, loanOptions }) => {
  return (
    <>
      <div>
        <Slider
          dotStyle={{ borderColor: 'white' }}
          activeDotStyle={{ borderColor: 'white' }}
          handleStyle={{ borderColor: '#03033A', backgroundColor: '#03033A' }}
          railStyle={{ backgroundColor: '#922F91' }}
          trackStyle={{ backgroundColor: '#A4CB50' }}
          onChange={handleChange}
          defaultValue={50}
          marks={{
            0: {
              style: {
                color: '#101044',
                fontWeight: 'bold'
              },
              label: `${loanOptions[0].toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}`
            },
            25: '',
            50: '',
            75: '',
            100: {
              style: {
                color: '#101044',
                fontWeight: 'bold'
              },
              label: `${loanOptions[4].toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}`
            }
          }}
          step={null}
        />
      </div>
    </>
  )
}
