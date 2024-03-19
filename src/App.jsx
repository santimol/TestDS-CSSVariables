import React, { useState } from "react"
import reactLogo from "./assets/react.svg"
// eslint-disable-next-line import/no-absolute-path
import viteLogo from "/vite.svg"
import { Button } from "base"
import { GsButton } from "gs"
import { RpButton } from "rp"

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button>Test Base</Button>
      <GsButton></GsButton>
      <RpButton></RpButton>
    </>
  )
}

export default App
