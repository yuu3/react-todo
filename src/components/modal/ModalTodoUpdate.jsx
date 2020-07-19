import React, {
  useState,
  useContext
} from 'react'
import AppButton from '../partials/AppButton'
import { Modal } from './Modal'
import { TodosContext } from '../../context/todo'

export const ModalTodoUpdate = (props) => {
  const { updateTodo } = useContext(TodosContext)
  const [values, setValues] = useState({
    title: props.title,
    desc: props.desc
  })
  const handleInputChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    setValues({
      ...values, [name]: value
    })
  }
  const sendTodo = () => {
    updateTodo({
      docId: props.docId,
      title: values.title,
      desc: values.desc
    }).then(() => {
      props.changeValue()
    })
  }

  return (
    <Modal
      modal={props.modal}
      changeValue={() => props.changeValue()}
    >
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
          text="更新"
          bgColor="main"
          textColor="white"
        />
      </div>
    </Modal>
  )
}
