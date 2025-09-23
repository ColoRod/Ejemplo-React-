import Checkbox from '../atoms/Checkbox'
import Button from '../atoms/Button'

export default function TaskItem({ text, completed, onToggle, onDelete }) {
  return (
    <li>
      <Checkbox checked={completed} onChange={onToggle} />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
      <Button onClick={onDelete}>🗑️</Button>
    </li>
  )
}