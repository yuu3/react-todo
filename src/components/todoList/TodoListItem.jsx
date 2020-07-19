import React, {
  useState,
  useContext
} from 'react'
import { ModalTodoUpdate } from '../modal/ModalTodoUpdate'
import { TodosContext } from '../../context/todo'

function TodoListItem(props) {
  const [modal, modalSwitch] = useState(false)
  const { deleteTodo } = useContext(TodosContext)
  const handleClick = (docId) => {
    deleteTodo(docId)
  }

  return (
    <>
      <li
        onClick={() => modalSwitch(!modal)}
        className="group hover:bg-gray-200 duration-150 rounded-md flex justify-between mt-2 p-2 text-xs cursor-pointer"
      >
        <span>{props.list.title}</span>
        <img
          onClick={() => handleClick(props.list.docId)}
          src="./icon/close.svg"
          alt="delete todo icon"
          className="w-4 opacity-0 group-hover:opacity-100 duration-150"
        />
      </li>
      <ModalTodoUpdate
        modal={modal}
        changeValue={() => modalSwitch(!modal)}
        docId={props.list.docId}
        title={props.list.title}
        desc={props.list.desc}
      />
    </>
  )
}

export default TodoListItem
