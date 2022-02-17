import {useCounter} from "./context/CounterContext";

export const Counter = () => {
    const { state: { counter }, dispatch } = useCounter()
    const handleIncrement = () => {
        dispatch({type: "INCREMENT"})
    }
    const handleDecrement = () => {
        dispatch({type: "DECREMENT"})
    }
    console.log(counter)
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}