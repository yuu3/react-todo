import React, {
  useState,
  useContext
} from 'react'
import AppButton from '../partials/AppButton'
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
    <div>
      <div
        onClick={() => props.changeValue()}
        className="bg-black fixed inset-0 z-10 opacity-50"
      />
      <div className="w-4/5 h-auto rounded-lg py-6 px-8 bg-white fixed inset-modal bottom-auto z-50">
        <div>
          <label className="block mb-2 text-md">タイトル</label>
          <input
            name="title"
            onChange={handleInputChange}
            defaultValue={values.title}
            className="w-full p-2 rounded border border-gray-500"
          />
        </div>
        <div className="my-4">
          <label className="block mb-2 text-md">説明</label>
          <textarea
            name="desc"
            onChange={handleInputChange}
            defaultValue={values.desc}
            className="w-full h-32 p-2 rounded border border-gray-500"
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
            text="作成"
            bgColor="main"
            textColor="white"
            buttonHandleClick={() => sendTodo()}
          />
        </div>
      </div>
    </div>
  )
}
