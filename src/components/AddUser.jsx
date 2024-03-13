import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
    const [values , setValues] = useState({
        title :'',
       completed : false
    })
const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/todos", values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err))
    }
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">

        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
            <h1>Add User</h1>
            <form onSubmit={handleSubmit} >

                <div className="mb-2">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Enter Name" 
                    onChange={e => setValues ({...values, title:e.target.value})}/>
                </div>
                <div className="mb-2">
                    <input type="checkbox" name="checkbox" className="checkbox" 
                    
                    onChange={e => setValues ({...values, completed:e.target.value})}/>
                                        <label htmlFor="checkbox">check</label>

                </div>
            
                <button className="btn btn-success">Submit</button>
            <Link to="/" className="btn btn-primary ms-3">Back</Link>
            </form>
        </div>
    </div>
  )
}

export default AddUser