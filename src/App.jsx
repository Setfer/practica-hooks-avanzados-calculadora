import './App.css'
import Calculator from './components/calculator/calculator'
import Timer from './components/timer/timer'
import UseGetTime from './customHooks/getDate'



function App() {
  const {time} = UseGetTime()

  return (
    <>
    <Timer time={time}/> 
    <Calculator/>
    </>
  )
}

export default App
