import { useMemo, useState } from 'react'
import { useDebounceValue } from '#/hooks/useDebounceValue.ts'

type TodoListProps = {
  todos: { id: number; name: string; isCompleted: boolean; created: string }[]
  toggleCompleted: (todoId: number) => void
  onDelete: (todoId: number) => void
}

export default function TodoList({
  todos,
  toggleCompleted,
  onDelete,
}: TodoListProps) {
  const [query, setQuery] = useState('')
  const debounceQuery = useDebounceValue(query)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleDelete = (todoId: number) => () => {
    onDelete(todoId)
  }

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) =>
      todo.name.toLowerCase().includes(debounceQuery.toLowerCase()),
    )
  }, [debounceQuery, todos])

  return (
    <div className="mt-4">
      <p>할 일 목록</p>
      <input
        className="w-full border-b border-indigo-300 mb-2 outline-none py-1 disabled:bg-gray-300"
        value={query}
        onChange={handleChange}
        placeholder="검색어를 입력하세요"
        disabled={todos.length === 0}
      />
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between py-1 text-sm not-first-of-type:border-t border-gray-300"
          >
            <label className="flex items-center cursor-pointer flex-auto">
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => toggleCompleted(todo.id)}
              />
              <p
                className={`${todo.isCompleted ? 'line-through text-gray-500' : ''} pl-4`}
              >
                {todo.name}
              </p>
            </label>
            <div className="flex gap-2 items-center">
              <p>{todo.created}</p>
              <button
                className="border border-gray-300 px-2 py-1 rounded-md cursor-pointer"
                onClick={handleDelete(todo.id)}
              >
                삭제
              </button>
            </div>
          </div>
        ))
      ) : query ? (
        <div className="font-semibold text-red-400">
          존재하지 않는 할 일 입니다.
        </div>
      ) : (
        <div className="font-semibold text-red-400">
          입력 된 할 일이 없습니다.
        </div>
      )}
    </div>
  )
}
