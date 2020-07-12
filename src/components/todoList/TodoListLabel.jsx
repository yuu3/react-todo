import React from 'react'

function TodoListLabel(props) {
  return (
    <span className='py-1 px-2 rounded text-white bg-blue-600 text-xs'>{props.title}</span>
  )
}

export default TodoListLabel
