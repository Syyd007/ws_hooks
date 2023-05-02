import {useState} from "react";
const Filter = ({filterTask}) => {
  const [search,setSearch]=useState('')
  const handleChange=(e)=>{
    setSearch(e.target.value)
    filterTask(e.target.value)

}
  
    return (
    <input value={search} type="text" placeholder="Search" onChange={handleChange} />  )
}

export default Filter