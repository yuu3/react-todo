import React from 'react'

const AppButton = (props) => {
  return (
    <button
      onClick={() => props.buttonHandleClick()}
      className={`rounded-lg py-2 px-4 text-xs text-${props.textColor} bg-${props.bgColor}`}
    >
      {props.text}
    </button>
  )
}

export default AppButton
