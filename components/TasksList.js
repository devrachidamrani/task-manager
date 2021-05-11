import React from 'react'

const TasksList = ({ allTasks }) => {
  return (
    <div>
      <h2>Tasks List</h2>
      {allTasks.length > 0 &&
        allTasks.map((task, index) => <li key={index}>{task.task}</li>)}
    </div>
  )
}

export default TasksList
