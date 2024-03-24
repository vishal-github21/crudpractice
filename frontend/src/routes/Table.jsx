import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const table = () => {
  const [users,setUsers]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080")
    .then(result=>setUsers(result.data))
    .catch(err=>console.log(err))
  },[])
  const handleDelete=(id)=>{
    axios.delete("http://localhost:8080/delete/"+id)
    .then(result=>{console.log(result)
      window.location.reload()
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className="min-h-screen bg-cyan-300 flex justify-center items-center">
      <div className="min-h-[50vh] max-h-[60vh] overflow-scroll min-w-[70vh] shadow-lg bg-white rounded-md p-4">
        <Link to="/create" className=""><button className="bg-green-300 rounded-md px-4 py-1">add</button></Link>
        <table className="bg-white table-fixed border-separate border ">
          <thead>
            <tr className="border">
              <th>Name</th>
              <th>Email</th>
              <th className='w-80 px-6'>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='max-h-[50vh] overflow-scroll'>
            {
              users.map((user)=>(
                <tr className="border">
                  <td className="border">{user.Name}</td>
                  <td className="border">{user.Email}</td>
                  <td className="border">{user.Age}</td>
                  <td className="border">
                  <Link to={`/update/${user._id}`} className=""><button className="bg-blue-300 rounded-md px-4 py-1">Update</button></Link>
                    <button onClick={()=>handleDelete(user._id)} className="bg-red-500 rounded-md px-4 py-1">Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default table
