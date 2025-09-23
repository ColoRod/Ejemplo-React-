import TaskForm from '../molecules/TaskForm'
import TaskList from '../organisms/TaskList'

export default function MainLayout({ tasks, onAdd, onToggle, onDelete }) {
  return (
    <>
      <h1>LISTA DE TAREAS DE ANDRES</h1>
      <TaskForm onAdd={onAdd} />
      {tasks.length === 0 ? (
        <p>No hay tareas disponibles</p>
      ) : (
        <TaskList tasks={tasks} onToggle={onToggle} onDelete={onDelete} />
      )}
    </>
  )
}

