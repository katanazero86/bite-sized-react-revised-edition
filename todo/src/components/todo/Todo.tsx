import {useState} from "react";
import Header from "#/components/todo/header/Header.tsx";
import AddTodo from "#/components/todo/addTodo/AddTodo.tsx";
import TodoList from "#/components/todo/todoList/TodoList.tsx";

type Todo = {
    id: number,
    name: string,
    isCompleted: boolean,
    created: string
}

export default function Todo() {

    const [todos, setTodos] = useState<Todo[]>([
        {id: 1, name: 'todo1', isCompleted: false, created: '2026. 4. 21.'},
        {id: 2, name: 'todo2', isCompleted: false, created: '2026. 4. 21.'},
    ])

    const handleTodoAdd = (todoName: string) => {
        const todayLocale = new Date().toLocaleString().split('.')
        const today = `${todayLocale[0]}. ${todayLocale[1]}. ${todayLocale[2]}.`
        setTodos((prev) => {
            return [...prev, {id: prev.length + 1, name: todoName, isCompleted: false, created: today}]
        })
    }

    const toggleTodoCompleted = (todoId: number) => {
        const targetTodoIndex = todos.findIndex((todo) => todo.id === todoId)
        if (targetTodoIndex === -1) return
        const newTodos = [...todos]
        newTodos[targetTodoIndex].isCompleted = !newTodos[targetTodoIndex].isCompleted
        setTodos(newTodos)
    }

    const handleTodoDelete = (todoId: number) => {
        const targetTodoIndex = todos.findIndex((todo) => todo.id === todoId)
        if (targetTodoIndex === -1) return
        const newTodos = [...todos]
        newTodos.splice(targetTodoIndex, 1)
        setTodos(newTodos)
    }

    return (
        <div className="border border-gray-300 p-2 rounded max-w-2xl mx-auto">
            <Header/>
            <AddTodo onAdd={handleTodoAdd}/>
            <TodoList todos={todos} toggleCompleted={toggleTodoCompleted} onDelete={handleTodoDelete}/>
        </div>
    )
}