import React, { useRef, useState } from 'react'
import "./calculator.css"


const Calculator =React.memo (() => {
  const refInputNum1 = useRef()
  const refInputOperacion = useRef()
  console.log("uee")
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
        setResultado([...resultados, (num1 * num2/ 100)] )
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
      <div className='resultados'>
        {resultados.map((resultado, index) => {
          if(index===(resultados.length-1)){
          return <><p key={index}>{resultado}</p><p>Ultimo resultado:</p></>
          }else if(index===(resultados.length-2)){
            return <><p key={index}>{resultado}</p><p>Ultimos resultados:</p></>
          }else{return <p key={index}>{resultado}</p>}
        })}
      </div>
    </div>
  )
})

export default Calculator
