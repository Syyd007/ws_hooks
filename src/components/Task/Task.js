import React from 'react'

const Task = ({el}) => {
  return (
    <>
     	<li className={el.isDone?"completed":""}><span><i className="fa fa-trash"></i></span>  {el.description}  / {el.user}</li>
    </>
  )
}

export default Task