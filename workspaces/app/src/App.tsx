import { useState } from 'react'
import { TestComponent } from '@hogix/components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TestComponent />
    </>
  )
}

export default App
