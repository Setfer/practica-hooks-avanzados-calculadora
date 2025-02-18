import React, { useReducer, useRef, useMemo } from 'react'
import './calculator.css'

const initialState = {
  n1: 0,
  operador: '',
  resultado: '',
  resultados: [],
  resultadosOrdenados: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NUM1':
      console.log(action.payload.operador)
      return {
        ...state,
        n1: parseInt(action.payload.inputValue),
        operador: action.payload.operador
      }
    case 'CALCULAR':
      console.log(action.payload)
      return {
        ...state,
        resultado: action.payload,
        resultados: [...state.resultados, action.payload]
      }
    case 'ORDENAR':
      return {
        ...state,
        resultadosOrdenados: [action.payload]
      }
  }
}

const Calculator = React.memo(() => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { n1, resultado, operador, resultados, resultadosOrdenados } = state

  const refInputNum = useRef()

  const setNum1 = (operador) => {
    dispatch({
      type: 'SET_NUM1',
      payload: { inputValue: refInputNum.current.value, operador: operador }
    })
    refInputNum.current.value = ''
  }

  useMemo(() => {
    console.log(resultados)
    dispatch({
      type: 'ORDENAR',
      payload: resultados.toSorted((a, b) => a - b)
    })
  }, [resultados])

  return (
    <div className='calculator'>
      <div className='operadores'>
        <input type='number' ref={refInputNum} className='input' />
        <button onClick={() => setNum1('+')}>+</button>
        <button onClick={() => setNum1('-')}>-</button>
        <button onClick={() => setNum1('*')}>*</button>
        <button onClick={() => setNum1('/')}>/</button>
        <button onClick={() => setNum1('%')}>%</button>
        <button onClick={() => calcular(operador, n1, refInputNum, dispatch)}>
          =
        </button>
        </div>
        <p> Ultimo resultado : {resultado}</p>
        <div className='resultados_ordenados'>
        <h2>Resultados históricos</h2>
        {resultadosOrdenados.map((resultH, index) => (
          <h3 id='resultados' key={index}>{resultH}</h3>
        ))}
      </div>
    </div>
  )
})

const calcular = (operador, n1, inputN2, dispatch) => {
  switch (operador) {
    case '+':
      dispatch({
        type: 'CALCULAR',
        payload: n1 + parseInt(inputN2.current.value)
      })
      break
    case '-':
      dispatch({
        type: 'CALCULAR',
        payload: n1 - parseInt(inputN2.current.value)
      })
      break
    case '*':
      dispatch({
        type: 'CALCULAR',
        payload: n1 * parseInt(inputN2.current.value)
      })
      break
    case '/':
      dispatch({
        type: 'CALCULAR',
        payload: n1 / parseInt(inputN2.current.value)
      })
      break
    case '%':
      dispatch({
        type: 'CALCULAR',
        payload: n1 % parseInt(inputN2.current.value)
      })
      break
    default:
  }
  inputN2.current.value = ''
}

export default Calculator
