import axios from 'axios';
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Read = () => {
    const [users,setUsers] = useState([])
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3000/todos/${id}` )
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }, [])
  return (
    <div className='container'>


   
    <div className='d-flex justify-content-center align-items-center'>
<h2>{users.title}{users.completed      ? '✅'
                        : '❌'}</h2>
    </div>
    </div>
  )
}

export default Read