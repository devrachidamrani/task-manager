import React from 'react'

const TasksList = ({ allTasks, deleteHandler }) => {
  return (
    <div>
      <h2>Tasks List</h2>
      {allTasks.length > 0 &&
        allTasks.map((task, index) => (
          <div key={index} className="task">
            {task.task}
            <button className="delete" onClick={() => deleteHandler(task.id)}>
              Delete
            </button>
          </div>
        ))}
    </div>
  )
}

export default TasksList
