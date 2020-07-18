import React from 'react'

export const ModalBackground = (props) => {
  return (
    <div
      onClick={() => props.modalClose()}
      className="bg-black fixed inset-0 opacity-50 z-0"
    />
  )
}
