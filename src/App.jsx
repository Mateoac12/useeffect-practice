import { useEffect, useState } from 'react'

function App() {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log('setNumber(1)')
      setNumber(lastNumber => lastNumber + 1)
    }, 10000)

    return () => {
      console.log('return of useeffect')
      clearInterval(intervalID)
    }
  }, [number])

  return <div className="App">Contador: {number}</div>
}

export default App
