import Checkbox from '../atoms/Checkbox'
import Button from '../atoms/Button'

export default function TaskItem({ text, completed }) {
  return (
    <li>
      <Checkbox defaultChecked={completed} />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</span>
      <Button>🗑️</Button>
    </li>
  )
}
