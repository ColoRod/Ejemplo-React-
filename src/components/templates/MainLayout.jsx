import TaskForm from '../organisms/TaskForm'
import TaskList from '../organisms/TaskList'

export default function MainLayout() {
  return (
    <>
      <h1>LISTA DE TAREAS DE ANDRES</h1>
      <TaskForm />
      <TaskList />
    </>
  )
}
