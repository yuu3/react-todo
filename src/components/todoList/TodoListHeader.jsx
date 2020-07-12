import React from 'react'
import TodoListLabel from './TodoListLabel'

function TodoListHeader(props) {
  return (
    <div className="w-full flex items-center justify-between">
      <TodoListLabel title={props.title} />
      <img
        src="./icon/dots-horizontal.svg"
        alt="dots icon"
      />
    </div>
  )
}

export default TodoListHeader
