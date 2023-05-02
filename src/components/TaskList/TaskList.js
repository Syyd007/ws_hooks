import React from 'react'
import Task from '../Task/Task'

const TaskList = ({tasks,search}) => {
  
  return (
    <ul>{tasks.filter(task => task.description.toLowerCase().includes(search.toLowerCase())).map((el,i)=><Task key={i} el={el}/>)}</ul>
  )
}

export default TaskList