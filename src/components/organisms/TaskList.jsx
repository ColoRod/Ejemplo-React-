import TaskItem from '../molecules/Taskitem'

export default function TaskList() {
  const tareas = [
    { text: 'Tarea 1', completed: false },
    { text: 'Tarea 2', completed: false },
    { text: 'tarea 3', completed: true },
    { text: 'Tarea 4', completed: false },
    { text: 'Tarea 5', completed: false },
    { text: 'tarea 6', completed: true },
  ]

  return (
    <ul>
      {tareas.map((t, i) => (
        <TaskItem key={i} text={t.text} completed={t.completed} />
      ))}
    </ul>
  )
}
