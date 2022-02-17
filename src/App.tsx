import './App.css'
import {CounterProvider} from "./context/CounterContext";
import {Counter} from "./Counter";

function App() {

  return (
    <CounterProvider className="App">
            <Counter />
    </CounterProvider>
  )
}

export default App
