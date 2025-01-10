import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from '@components/Hello'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <Hello/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>

      <div class="container mt-5"> 
        <h1 class="text-center">Vite + Solid</h1> 
        <div class="card text-center p-4"> 
          <button class="btn btn-primary mb-3" onClick={() => setCount((count) => count + 1)}> count is {count()} </button> 
          <p class="card-text"> Edit <code>src/App.tsx</code> and save to test HMR </p>
        </div> 
          <p class="read-the-docs text-center mt-3"> Click on the Vite and Solid logos to learn more </p> 
      </div>
    </>
  )
}

export default App
