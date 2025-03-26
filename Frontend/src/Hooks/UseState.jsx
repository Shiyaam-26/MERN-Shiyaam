import React from 'react'
import {useState} from 'react'

const UseState = () => {
    //const [count,setCount]=useState(0);
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        address:""
    })

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Form Data: ",formData);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label htmlFor="">Email</label>
        <input type="text"  name="email"value={formData.email} onChange={handleChange} />
        <label htmlFor="">Address</label>
        <input type="text"  name="address"value={formData.address} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UseState