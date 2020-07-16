import React, {
  useContext
} from 'react'
import TodoListHeader from './TodoListHeader'
import TodoListItem from './TodoListItem'
import { TodosContext } from '../../context/todo'

export const TodoList = (props) => {
  const { todos } = useContext(TodosContext)

  return (
    <div className="w-full sm:w-full md:w-1/5 lg:w-1/5 rounded-lg p-4 shadow-lg bg-white">
      <TodoListHeader title={props.title} />
      <ul className="pt-2">
        {todos.map(item => {
          return <TodoListItem
            key={item.docId}
            list={item}
          />
        })}
      </ul>
    </div>
  )
}
