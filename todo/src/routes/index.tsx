import { createFileRoute } from '@tanstack/react-router'
import Todo from "#/components/todo/Todo.tsx";

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main>
      <Todo />
    </main>
  )
}
