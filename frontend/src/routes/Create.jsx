import { useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
const Create = () => {
  const[name,setname]=useState()
  const[email,setemail]=useState()
  const[age,setage]=useState()
  const navigate=useNavigate()
  const Submit=(e)=>{
    e.preventDefault();
    axios.post("https://crudpractice-api.vercel.app/create",{Name:name,Email:email,Age:age})
    .then(result=>{
      console.log(result)
      navigate("/")
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-cyan-300">
        <div className="bg-white p-44">
          <form onSubmit={Submit}>
        <h1 className="text-4xl font-bold">add user</h1>
            
        <input onChange={(e)=>setname(e.target.value)} type="text" placeholder="name" className="mb-3 outline-double"/><br />
        <input onChange={(e)=>setemail(e.target.value)} type="text" placeholder="email " className="mb-3 outline-double" /><br />
        
        <input onChange={(e)=>setage(e.target.value)} type="text" placeholder="Age" className="mb-3 outline-double" />
        <br />
        <button className="bg-green-400 rounded-lg px-5 py-1">Add</button>
        </form>
        </div>
    </div>
  )
}

export default Create