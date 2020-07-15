import React from 'react'

export const AppFloatButton = (props) => {
  return (
    <button
      onClick={() => props.changeValue()}
      className="w-12 h-12 mb-4 mr-4 shadow-main rounded-full flex items-center justify-center bg-main text-white fixed right-0 bottom-0"
    >
      <img
        src="./icon/plus.svg"
        alt="float button icon"
      />
    </button>
  )
}
