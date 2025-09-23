import TaskItem from '../molecules/Temporal'

export default function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          text={task.text}
          completed={task.completed}
          onToggle={() => onToggle(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  )
}

