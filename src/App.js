import './App.css';
import AddTask from './components/Add/AddTask';
import TaskList from './components/TaskList/TaskList';
import { useState } from 'react';
import {tasks} from "./data.js";
import Filter from "./components/Filter/Filter";

function App() {
  const [search,setSearch]=useState('')

const filterTask =(q)=>{
  console.log(q)
  setSearch(q)
}

const [allTasks, setAllTasks] = useState(tasks)
  const getTask=(description,user)=>{
console.log({id:Date.now(),description,user,isDone:false});
    // setAllTasks([...allTasks, {id:Date.now(),description,user,isDone:false}]);
    setAllTasks((prev) => [...prev, {id:Date.now(),description,user:user.toUpperCase(),isDone:false}]);
  }
 
  return (
    <div className="App"  id="container">
   <h1>To-Do List </h1>
     <AddTask getTask={getTask}/>
     <Filter filterTask={filterTask}/>
     <TaskList tasks={allTasks} search={search}/>
     
    </div>
  );
}

export default App;
