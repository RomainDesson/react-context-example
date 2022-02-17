import React, {createContext, useReducer} from "react"

type State = { counter: number };
type Action = { type: "INCREMENT" } | { type: "DECREMENT" }
type Dispatch = (action: Action) => void;
type CountProviderProps = { children: React.ReactNode };

export const CounterContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined)

export const counterReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "INCREMENT":
            return {
                counter: state.counter + 1,
            };
        case "DECREMENT":
            return {
                counter: state.counter - 1,
            }
        default: {
            return state
        }
    }
};

//We setup the CounterProvider component
export const CounterProvider = ({ children }: CountProviderProps) => {
    const [state, dispatch] = useReducer(counterReducer, { counter: 0 });
    const value = { state, dispatch };
    return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
};

//We can use the custom useCounter hook to avoid an undefined context
export const useCounter = () => {
    const context = React.useContext(CounterContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};