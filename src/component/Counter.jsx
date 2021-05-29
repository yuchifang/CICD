import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div style={{
            display: "flex",
            width: "100vw",
            justifyContent: "space-around",
        }}>
            <button onClick={() => setCount(pre => pre + 1)}>+</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(pre => pre - 1)}>-</button>
        </div>
    )
}
