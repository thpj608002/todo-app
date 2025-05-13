import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { MdDelete } from 'react-icons/md'

type Props = {
  todos: string[],
  updateTodos: (value: string[]) => void
}

function Todo(props: Props) {
  const [todo, setTodo] = useState('')
  const todos = props.todos
  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center min-h-screen">
        <Card>
          <CardHeader>
            <CardTitle>ToDo App</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              placeholder='タスクを追加'
              onChange={(e) => {
                setTodo(e.target.value)
              }}
            />
            <Button
              className="w-full mt-2"
              onClick={() => {
                props.updateTodos([...todos, todo])
                setTodo('')
              }}
            >
              追加
            </Button>
            <ul>
              {todos.map((todo, index)=> (
                <li className="bg-white p-2 mt-2 flex">
                  <div>・{todo}</div>
                  <button
                    className="ml-2"
                    onClick={()=>{
                      props.updateTodos(todos.filter((_, i) => i !== index))
                    }}
                  >
                    <MdDelete color="gray"/>
                  </button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Todo