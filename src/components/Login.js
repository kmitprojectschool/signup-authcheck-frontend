import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
//import { useAuth } from './AuthProvider';

const Login = () => {

  const navigate = useNavigate();
  const [requsername,setUsername] = useState('');
  const [reqpassword,setPassword] = useState('');

 const clickHandler = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post(
        "http://localhost:5000/user/login",        {
          username: requsername,
          password: reqpassword
        },
        {
          credentials: "include",
          mode:"cors"
        }
      );
  
      if (res.status === 200) {
       
        console.log(res.data);
        
        localStorage.setItem('user',res.data.username)
        localStorage.setItem('role',res.data.role)

        console.log(localStorage);
        if(res.data.role === "admin")
          navigate('/admin');
        else
          navigate('/user');

      }
    } catch(error) {
      console.log(" error" +error);
    } finally {
        console.log("in finally");
    }
  }

    return (
        <div>
            <h1> Login here </h1>
            <div className="mb-3 row">
            <label htmlFor="exampleFormControlInput1" className="col-sm-2 col-form-label">username</label>
            <div className="col-sm-8">
    <input type="text" onChange={(e) => {setUsername(e.target.value)}}  className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
</div>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-8">
      <input type="password" onChange={(e) => {setPassword(e.target.value)}}  className="form-control" id="inputPassword"/>
    </div>
  </div>

  <div className="mb-3 row"> <div className="col-sm-8">
  <button  onClick={clickHandler} className="btn bg-warning" type="button" id="button-addon1">Login</button>
 </div>
 </div>
        </div>
    );
};

export default Login;