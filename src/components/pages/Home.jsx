import React from 'react'
import { useState } from 'react'
import MainLayout from '../templates/MainLayout'

export default function Home() {
  const [tasks, setTasks] = useState([])

  const addTask = (text) => {
    const nuevaTarea = {
      text,
      completed: false,
      createdAt: Date.now(),
    }
    setTasks([nuevaTarea, ...tasks])
  }

  const toggleTask = (index) => {
    const actualizadas = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    )
    setTasks(actualizadas)
  }

  const deleteTask = (index) => {
    const filtradas = tasks.filter((_, i) => i !== index)
    setTasks(filtradas)
  }

  return (
    <MainLayout 
      tasks={tasks}
      onAdd={addTask}
      onToggle={toggleTask}
      onDelete={deleteTask}
    />
  ) 
}
