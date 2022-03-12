import React, { useState } from 'react'

export const Counter = ({value}) => {

    const [count,setCount] = useState(value)

    const Increment = () => {
        setCount(count+1)
    }

    const Decrement = () => {
        setCount(count-1)
    }

    const Double = () => {
        setCount(count*2)
    }


  return (
    <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Double}>Double</button>

    </div>
  )
}
