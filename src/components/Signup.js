import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {
    const [credentials, setCredentials] = useState({name:"", email: "", password: ""}) 
    //let history = useHistory();
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username:credentials.name,email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if(json.success)
        {
             // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            navigate('/')
        }
        else{
            alert(json.message)
        }
           
            
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" ,  backgroundColor:props.mode==='dark'?'black':'#F1F1F1'}}>
        
    <div className="container d-flex align-items-center justify-content-center my-4"  >
    <div className='card col-md-4 p-3' style={{
          border: 'none' , backgroundColor:props.mode==='dark'?'#262525':'white',
          color:props.mode==='light'?'#262525':'white'
        }}>
        <div className="card-header text-center" style={{
          border: 'none' , backgroundColor:props.mode==='dark'?'#262525':'white',
          color:props.mode==='light'?'#262525':'white'
        }}>
            <h3 className="card-title">Sign Up</h3>
        </div>
            <form className='container my-3 align-items-center  text-center'  onSubmit={handleSubmit}>
            <div className="mb-3">
                    <label htmlFor="name" className="form-label">Username</label>
                    <input type="text" className="form-control align-items-center  text-center" value={credentials.name} onChange={onChange} id="name" name="name" aria-describedby="nameHelp" required  />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control align-items-center  text-center" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" required  />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control align-items-center  text-center" value={credentials.password} onChange={onChange} name="password" id="password" required minLength={5} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
            </div>
  )
}

export default SignUp