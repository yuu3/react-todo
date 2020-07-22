import React, {
  useState
} from 'react'
import { Toolbar } from './components/toolbar/Toolbar'
import { TodoList } from './components/todoList/TodoList'
import { ModalTodoCreate } from './components/modal/ModalTodoCreate'
import { AppFloatButton } from './components/partials/AppFloatButton'
import { TodosProvider } from './context/todo'

export const App = () => {
  const title = "No Status"
  const [modal, modalSwitch] = useState(false)

  return (
    <div className="min-h-screen pt-20 px-8 bg-gray-200">
      <Toolbar />
      <TodosProvider>
        <TodoList title={title} />
        <ModalTodoCreate
          modal={modal}
          changeValue={() => modalSwitch(!modal)}
        />
      </TodosProvider>
      <AppFloatButton
        icon="plus"
        changeValue={() => modalSwitch(!modal)}
      />
    </div>
  )
}
