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
      <button className="save" onClick={onAdd}>
        Save
      </button>
    </>
  )
}

export default TaskForm
