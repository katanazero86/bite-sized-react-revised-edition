import Header from "./components/counter/header/Header.tsx";
import View from "./components/counter/view/View.tsx";
import Controller from "./components/counter/controller/Controller.tsx";
import {useState} from "react";

export default function App() {

    const [count, setCount] = useState(0);

    const handleCountClick = (num: number) => {
        setCount(count + num);
    }

    return (
        <>
            <section className="border border-gray-300 p-4 rounded-md max-w-2xl mx-auto">
                <Header />
                <View count={count} />
                <Controller onClick={handleCountClick} />
            </section>
        </>
    )
}
