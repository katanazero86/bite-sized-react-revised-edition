import {useState} from "react";

type AddTodoProps = {
    onAdd: (todoName: string) => void
}

export default function AddTodo({onAdd}: AddTodoProps) {

    const [input, setInput] = useState('')
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        if(input.trim() === '') return
        onAdd(input)
        setInput('')
    }

    return (
        <div className="flex flex-col gap-2 mt-4">
            <p>할 일을 입력하세요</p>
            <div className="flex gap-2 items-center">
                <input className="p-2 border border-gray-300 outline-none rounded w-10/12" type="text" value={input}
                       onChange={handleInputChange} placeholder="새로운 Todo..."/>
                <button className="border border-indigo-500 bg-white rounded p-2 text-indigo-500 cursor-pointer w-2/12"
                        onClick={handleClick}>추가
                </button>
            </div>
        </div>
    )
}