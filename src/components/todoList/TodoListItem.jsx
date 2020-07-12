import React from 'react'

function TodoListItem(props) {
  return (
    <li className="mt-4 text-xs">{props.list.title}</li>
  )
}

export default TodoListItem
