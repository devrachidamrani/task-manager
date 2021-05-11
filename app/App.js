import React, { useState } from 'react'
import TaskForm from '../components/TaskForm'
import TasksList from '../components/TasksList'

const App = () => {
  const [newTask, setNewTask] = useState({})
  const [allTasks, setAllTasks] = useState([])

  const addNewTask = () => {
    if (!newTask.task) alert('Please fill in the input')
    setAllTasks((prevState) => {
      return [...prevState, newTask]
    })
  }

  const deleteTask = (id) => {}

  const handleChange = ({ target }) => {
    const { name, value } = target
    setNewTask((prevState) => {
      return {
        ...prevState,
        [name]: value,
        id: Date.now(),
      }
    })
  }

  return (
    <div className="app">
      <h1> Task Manager </h1>

      <hr />
      <TaskForm onChange={handleChange} onAdd={addNewTask} />
      <TasksList onDelete={deleteTask} allTasks={allTasks} />
    </div>
  )
}

export default App
