import React, {
  createContext,
  useState,
  useMemo,
  useCallback
}from 'react'
import { db } from '../plugins/firebase'

const TodosContext = createContext()

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([])
  const collection = useMemo(() => {
    const col = db.collection('todo')

    col.onSnapshot(query => {
      const data = []

      query.forEach(d => data.push({ ...d.data(), docId: d.id }))
      setTodos(data)
    })

    return col
  }, [])

  const addTodo = useCallback(async (todo) => {
    await collection.add({
      title: todo.title,
      desc: todo.desc,
      statusCode: 0,
      createdAt: new Date(),
    })
  }, [])

  return (
    <TodosContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodosContext.Provider>
  )
}

export { TodosContext, TodosProvider }
