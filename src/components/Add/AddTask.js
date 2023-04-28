import React, { useState } from "react";

const AddTask = ({getTask}) => {
  const [desc, setDesc] = useState("")
  const [user, setUser] = useState("")
  const handleClick = ( )=> {
    getTask(desc,user)
    setDesc('')
    setUser('')
  }
  return (
    <>
      <i className="fa fa-plus" onClick={handleClick}></i>
      <input value={desc} type="text" placeholder="Add New Todo" onChange={(e)=>{setDesc(e.target.value)}} />
      <input value={user} type="text" placeholder="Add user" onChange={(e)=>{setUser(e.target.value)}} />
    </>
  );
};

export default AddTask;
