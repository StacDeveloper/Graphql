import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { gql } from "@apollo/client"
import { useQuery } from '@apollo/client/react'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const query = gql`
query GetTodo($todoId: ID!){
  Todo(id: $todoId) {
    author
  }
}

`

  const { loading, error, data } = useQuery(query, {
    variables: { todoId: "3" }
  })

  if (loading) return <div>Loadin...</div>
  if (error) console.log(error)
  console.log(data)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
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
    </>
  )
}

export default App
