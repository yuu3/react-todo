import React from 'react'

function TodoListItem(props) {
  return (
    <li className="group hover:bg-gray-200 duration-150 rounded-md flex justify-between mt-2 p-2 text-xs cursor-pointer">
      <span>{props.list.title}</span>
      <img
        src="./icon/close.svg"
        alt="delete todo icon"
        className="w-4 opacity-0 group-hover:opacity-100 duration-150"
      />
    </li>
  )
}

export default TodoListItem
