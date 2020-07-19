import React, {
  useContext
} from 'react'
import { TodosContext } from '../../context/todo'

function TodoListItem(props) {
  const { deleteTodo } = useContext(TodosContext)
  const handleClick = (docId) => {
    deleteTodo(docId)
  }

  return (
    <li className="group hover:bg-gray-200 duration-150 rounded-md flex justify-between mt-2 p-2 text-xs cursor-pointer">
      <span>{props.list.title}</span>
      <img
        onClick={() => handleClick(props.list.docId)}
        src="./icon/close.svg"
        alt="delete todo icon"
        className="w-4 opacity-0 group-hover:opacity-100 duration-150"
      />
    </li>
  )
}

export default TodoListItem
