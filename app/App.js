import React from 'react'
import TaskForm from '../components/TaskForm'
import TasksList from '../components/TasksList'

const App = () => {
  return (
    <div className="app">
      <h1> Task Manager </h1>
      <hr />
      <TaskForm />
      <TasksList />
    </div>
  )
}

export default App
