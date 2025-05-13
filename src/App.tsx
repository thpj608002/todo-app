import './App.css'
import Todo from './components/Todo'
import { useState } from 'react'

function App() {
  const LOCAL_STORAGE_KEY = 'my-todos'
  const [todos, setTodos] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? "[]")
  })
  const setTodosToLocalStorage = (LOCAL_STORAGE_KEY: string, value: string[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(value))
  }
  const updateTodos = (value: string[]) => {
    setTodos(value)
    setTodosToLocalStorage(LOCAL_STORAGE_KEY, value)
  }
  
  return (
    <>
      <Todo
        todos={todos}
        updateTodos={updateTodos}
      />
    </>
  )
}

export default App
