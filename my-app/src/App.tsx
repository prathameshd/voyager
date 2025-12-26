import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex">
        <div className="text-white text-2xl font-bold p-10 rounded-xl shadow-xl">
          Tailwind is working 🎉
        </div>
      </div>
    </>
  )
}

export default App
