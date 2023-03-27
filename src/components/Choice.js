import React from 'react'
import { Link } from 'react-router-dom'

const Choice = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" ,  backgroundColor:props.mode==='dark'?'black':'#F1F1F1',
    color:props.mode==='light'?'#262525':'white' }}>
      <div className="container" style={{}} >
        <div className="row">
          <div className="col-sm-6">
            <Link to="/developer" style={{ textDecoration: 'none',color:"black" }} >
              <div className="card" style={{ border: 'none' , backgroundColor:props.mode==='dark'?'#262525':'white',
        color:props.mode==='light'?'#262525':'white', height:'25rem',justifyContent:"center",alignItems: "center" }}>

                <div className="card-body text-center">
                  <i className="fa fa-user py-3" style={{ fontSize: "200px", color: "green" }}></i>
                  <h5 className="card-title" style={{backgroundColor:props.mode==='dark'?'#262525':'white',
        color:props.mode==='light'?'#262525':'white' }}>Developer</h5>
                  <p className="card-text" style={{backgroundColor:props.mode==='dark'?'#262525':'white',
        color:props.mode==='light'?'#262525':'white' }}>Some quick example text to build on the card<br /> title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 ">
            <Link to="/reviewer" style={{ textDecoration: 'none',color:"black"  }} >
              <div className="card" style={{ border: 'none' , backgroundColor:props.mode==='dark'?'#262525':'white',
        color:props.mode==='light'?'#262525':'white' , height:'25rem',justifyContent:"center",alignItems: "center"}}>

                <div className="card-body text-center">
                  <i className="fa fa-user py-3" style={{ fontSize: "200px", color: "blue" }}></i>
                  <h5 className="card-title" style={{backgroundColor:props.mode==='dark'?'#262525':'white',
        color:props.mode==='light'?'#262525':'white' }}>Reviewer</h5>
                  <p className="card-text" style={{backgroundColor:props.mode==='dark'?'#262525':'white',
        color:props.mode==='light'?'#262525':'white' }}>Some quick example text to build on the card<br /> title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Choice