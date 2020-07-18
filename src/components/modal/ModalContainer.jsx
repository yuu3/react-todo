import React, {
  useState,
  useContext
} from 'react'
import AppButton from '../partials/AppButton'
import { ModalBackground } from './ModalBackground'
import { TodosContext } from '../../context/todo'

export const Modal = (props) => {
  const { addTodo } = useContext(TodosContext)
  const [values, setValues] = useState({
    title: '',
    desc: ''
  })
  const handleInputChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    setValues({
      ...values, [name]: value
    })
  }
  const sendTodo = () => {
    addTodo({
      title: values.title,
      desc: values.desc
    }).then(() => {
      props.changeValue()
    })
  }

  return (
    <div className={`${props.modal ? 'opacity-100 z-50' : 'opacity-0 -z-10'} fixed inset-0 flex items-center justify-center duration-300`}>
      <ModalBackground modalClose={() => props.changeValue()} />
      <div className="w-4/5 h-auto rounded-lg py-5 px-5 bg-white shadow-lg z-50">
        <div>
          <label className="block mb-2 text-xs">タイトル</label>
          <input
            name="title"
            onChange={handleInputChange}
            defaultValue={values.title}
            className="w-full p-2 rounded border border-gray-500 text-xs"
          />
        </div>
        <div className="my-4">
          <label className="block mb-2 text-xs">説明</label>
          <textarea
            name="desc"
            onChange={handleInputChange}
            defaultValue={values.desc}
            className="w-full h-32 p-2 rounded border border-gray-500 text-xs"
          />
        </div>
        <div className="flex justify-end">
          <AppButton
            buttonHandleClick={() => props.changeValue()}
            text="キャンセル"
            bgColor="white"
            textColor="main"
          />
          <AppButton
            buttonHandleClick={() => sendTodo()}
            text="作成"
            bgColor="main"
            textColor="white"
          />
        </div>
      </div>
    </div>
  )
}
