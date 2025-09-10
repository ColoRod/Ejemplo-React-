import Input from '../atoms/Input'
import Button from '../atoms/Button'

export default function TaskForm() {
  return (
    <div>
      <Input placeholder="Nueva tarea" />
      <Button>ADD</Button>
    </div>
  )
}
