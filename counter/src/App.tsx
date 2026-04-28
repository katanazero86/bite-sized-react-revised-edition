import Header from "./components/counter/header/Header.tsx";
import View from "./components/counter/view/View.tsx";
import Controller from "./components/counter/controller/Controller.tsx";
import {useReducer, useState} from "react";
import Controller2 from "./components/counter/controller/Controller2.tsx";

const COUNTER_ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
};
const initialState = {
    count: 0,
};
const counterReducer = (state: typeof initialState = initialState, action: { type: string, payload: number }) => {
    switch (action.type) {
        case COUNTER_ACTIONS.INCREMENT:
            return {
                count: state.count + action.payload,
            };

        case COUNTER_ACTIONS.DECREMENT:
            return {
                count: state.count + action.payload,
            }
        default:
            return state;
    }
}

export default function App() {

    const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(counterReducer, initialState)

    const handleCountClick = (num: number) => {
        setCount(count + num);
    }

    const handleCountClick2 = (num: number) => {
        if (num > 0) {
            dispatch({
                type: COUNTER_ACTIONS.INCREMENT,
                payload: num
            })
        } else {
            dispatch({
                type: COUNTER_ACTIONS.DECREMENT,
                payload: num
            })
        }
    }

    return (
        <>
            <section className="border border-gray-300 p-4 rounded-md max-w-2xl mx-auto">
                <Header/>
                <View count={count}/>
                <Controller onClick={handleCountClick}/>
                <hr className="my-4"/>
                <h2>useReducer</h2>
                <Controller2 onClick={handleCountClick2}/>
                <p>count2: {state.count}</p>
            </section>
        </>
    )
}
