import { useParams,useNavigate } from "react-router-dom"
import { useState,useEffect } from "react"
import axios from "axios"

const Update = () => {
  const{id}=useParams()
  const[name,setName]=useState()
  const[email,setEmail]=useState()
  const[age,setAge]=useState()
  const navigate=useNavigate()
  useEffect(()=>{
    axios.get("https://crudpractice-api.vercel.app/getUser/"+id)
    .then((result)=>{
      console.log(result)
      
      
      
      
      
    })
    .catch(err=>console.log(err))
  })

  const update=(e)=>{
    e.preventDefault();
    axios.put("https://crudpractice-api.vercel.app/update/"+id,{Name:name,Email:email,Age:age})
    .then(result=>{
      console.log(result)
      navigate("/")
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-cyan-300">
        <div className="bg-white p-44">
        <form onSubmit={update}>
        <h1 className="text-4xl font-bold">update user</h1>
            
        <input  type="text"  className="mb-3 outline-double" placeholder={name} onChange={(e)=>setName(e.target.value)}/><br />
        <input  placeholder={email} type="text"  onChange={(e)=>setEmail(e.target.value)} className="mb-3 outline-double" /><br />
        
        <input  type="text" placeholder={age} className="mb-3 outline-double" onChange={(e)=>setAge(e.target.value)}/>
        <br />
        <button className="bg-green-400 rounded-lg px-5 py-1">update</button>
        </form>
        </div>
        
    </div>
  )
}

export default Update