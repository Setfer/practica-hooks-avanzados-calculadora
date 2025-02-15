import React, { useRef, useState } from 'react'
import './calculator.css'

const Calculator = React.memo(() => {
  const refInputNum1 = useRef()
  const refInputOperacion = useRef()
  const [resultados, setResultado] = useState([])
  let num1

  const enviarNum1 = (event) => {
    num1 = parseFloat(refInputNum1.current.value)
    refInputNum1.current.value = ''
    refInputOperacion.current = event.target
  }

  const operar = () => {
    if (!num1) {
      return
    }
    const num2 = parseFloat(refInputNum1.current.value)
    switch (refInputOperacion.current.textContent) {
      case '+':
        setResultado([...resultados, num1 + num2])
        break
      case '-':
        setResultado([...resultados, num1 - num2])
        break
      case '*':
        setResultado([...resultados, num1 * num2])
        break
      case '/':
        setResultado([...resultados, num1 / num2])
        break
      case '%':
        setResultado([...resultados, (num1 * num2) / 100])
        break
    }
    refInputNum1.current.value = ''
  }

  return (
    <div className='calculator'>
      <div className='operadores'>
        <input type='number' ref={refInputNum1} className='input' />
        <button onClick={(e) => enviarNum1(e)}>+</button>
        <button onClick={(e) => enviarNum1(e)}>-</button>
        <button onClick={(e) => enviarNum1(e)}>*</button>
        <button onClick={(e) => enviarNum1(e)}>/</button>
        <button onClick={(e) => enviarNum1(e)}>%</button>
        <button onClick={() => operar()}>=</button>
      </div>
      <div key='resultados' className='resultados'>
        <p>ultimo resultado :{resultados[resultados.length - 1]}</p>

        {resultados
          .slice(0, -1)
          .sort((a, b) => a - b)
          .map((resultado, index) => {
            if (index === 0) {
              return (
                <React.Fragment key={index}>
                  <p>Ultimos resultados:</p>
                  <p>{resultado}</p>
                </React.Fragment>
              )
            } else {
              return <p key={index}>{resultado}</p>
            }
          })}
      </div>
    </div>
  )
})

export default Calculator
