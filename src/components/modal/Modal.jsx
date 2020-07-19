import React from 'react'
import { ModalBackground } from './ModalBackground'

export const Modal = (props) => {
  return (
    <div className={`${props.modal ? 'opacity-100 z-50' : 'opacity-0 -z-10'} fixed inset-0 flex items-center justify-center duration-300`}>
      <ModalBackground modalClose={() => props.changeValue()} />
      <div className="w-4/5 h-auto rounded-lg py-5 px-5 bg-white shadow-lg z-50">
        {props.children}
      </div>
    </div>
  )
}
