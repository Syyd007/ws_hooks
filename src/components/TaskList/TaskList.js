import React from 'react'
import Task from '../Task/Task'

const TaskList = ({tasks}) => {
  return (
    <ul>{tasks.map((el,i)=><Task key={i} el={el}/>)}</ul>
  )
}

export default TaskList