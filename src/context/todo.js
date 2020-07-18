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
  }, [collection])

  const updateTodo = useCallback(async ({ docId, title, desc }) => {
    const update = {
      ...todos.find(todo => todo.docId === docId),
      title,
      desc,
      update: new Date()
    }
    await collection.doc(docId).set(update)
  }, [todos, collection])

  const deleteTodo = useCallback(async (docId) => {
    await collection.doc(docId).delete()
  }, [collection])

  return (
    <TodosContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  )
}

export { TodosContext, TodosProvider }
