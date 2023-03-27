import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  //let history = useHistory();
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: credentials.username, password: credentials.password })
    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      localStorage.setItem('pass', credentials.password);
      navigate('/')

    }
    else {
      alert("Invalid credentials");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ height: "80vh" }}>
      <div className='card col-md-4' style={{
        backgroundColor: props.mode === 'dark' ? '#262525' : 'white',
        color: props.mode === 'light' ? '#262525' : 'white'
      }}>
        <div className="card-header text-center ">
          <h3 className="card-title">Login</h3>
        </div>
        <form className='container my-3  align-items-center  text-center' onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="username" className="form-control text-center" value={credentials.username} onChange={onChange} id="username" name="username" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control text-center" value={credentials.password} onChange={onChange} name="password" id="password" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login