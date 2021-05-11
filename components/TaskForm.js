import React from 'react'

const TaskForm = ({ onChange, onAdd }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter task here .."
        name="task"
        onChange={onChange}
      />{' '}
      <button variant="text" color="default" onClick={onAdd}>
        Save
      </button>
    </>
  )
}

export default TaskForm
