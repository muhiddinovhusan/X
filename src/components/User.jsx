import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/todos`)
        .then(res => setUsers(res.data)
  
       )
       
        .catch(err => console.log(err.message))
}, [])
  
  return (
  
    <div className="container  ">
    <div ><Link className="btn btn-sm btn-success" to={`/addUser`}>
        Add
    </Link></div>
    {
        users.map((todo, i) => (

            <div className="list-group" key={i}>
                <h3 className="list-group-item">{todo.title} {
                    todo.completed
                        ? '✅'
                        : '❌'
                }</h3>
               <div className="d-flex gap-2">
                <Link className="btn btn-sm btn-primary" to={`/read/${todo.id}`}
                >Read</Link>
            
                <Link to={`/update/${todo.id}`} className="btn btn-sm btn-warning">Update
                </Link>
                <button className="btn btn-sm btn-danger" onClick={()=>deleteTodo(todo.id)}> Delete</button>
               </div>


            </div>

        ))
    }
    <div className="d-flex gap-2 align-items-center">

        <button className="btn btn-success" onClick={() => handleChange("prev")}>prev</button>
        <p className="fs-3">{}</p>
        <button className="btn btn-info" onClick={() => handleChange("next")}>next</button>
    </div>

</div>

  )
}

export default User