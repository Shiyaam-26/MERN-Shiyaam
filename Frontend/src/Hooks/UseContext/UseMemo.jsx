import {useMemo, useState} from 'react'

const UseMemo = () => {
    const [todos,setTodos]=useState([])
    const [count,setCount]=useState(1)

    const calculate=useMemo(()=>{
        console.log("Calculating.....");
        
        let sum=0;
        for(let i=1;i<=count;i++){
            sum+=i
        }
        return sum
    },[count])
  return (
    <div>
      <h1>Todos:{todos.length}</h1>
      <button onClick={()=>setTodos([...todos,"New Task"])}>Add Task</button>
      <h1>Sum from 1 to {count} : {calculate}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default UseMemo
