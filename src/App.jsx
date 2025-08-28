function App() {
  return (
    <>
      <h1>Lista de Tareas de Andrés</h1>
      <div>
        <input type="text" placeholder="Nueva tarea"/>
        <button>Añadir</button>
      </div>

      <ul>
        <li>
          <input type="checkbox"/>
          Tarea 1   
          <button>🗑️</button>
          </li>
        <li>
          <input type="checkbox"/>
          Tarea 2   
          <button>🗑️</button>
        </li>
        <li>
          <input type="checkbox" defaultChecked/>
          Tarea 3   
          <button>🗑️</button>
        </li>
        <li>
          <input type="checkbox"/>
          Tarea 4
          <button>🗑️</button>
        </li>
        <li>
          <input type="checkbox" defaultChecked/>
          Tarea 5
          <button>🗑️</button>
        </li>
        <li>
          <input type="checkbox"/>
          Tarea 6
          <button>🗑️</button>
        </li>
      </ul>
    </>
  )
}

export default App
