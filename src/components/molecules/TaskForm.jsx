import { useState } from 'react'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      onAdd(text)
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Nueva tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit">Enviar</Button>
    </form>
  )
}

