import React, { useState } from 'react'
import TaskForm from '../components/TaskForm'
import TasksList from '../components/TasksList'

const App = () => {
  const [newTask, setNewTask] = useState({})
  const [allTasks, setAllTasks] = useState([])

  const addNewTask = () => {
    const task = newTask.task
    if (task.trim() === '') {
      alert('Please fill in the input')
      return
    }

    const foundTask = allTasks.find((elt) => elt.task === task)

    if (foundTask) {
      return alert('This task is already saved!')
    }

    setAllTasks((prevState) => {
      return [...prevState, newTask]
    })
  }

  const deleteTaskById = (id) => {
    setAllTasks((prev) => prev.filter((task) => task.id !== id))
  }

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
      <TasksList deleteHandler={deleteTaskById} allTasks={allTasks} />
    </div>
  )
}

export default App
