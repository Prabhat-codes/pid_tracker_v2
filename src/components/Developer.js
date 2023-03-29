import React from 'react'
import File from './File'
import { useState } from 'react'
import UploadFile from './UploadFile'
const Developer = (props) => {
  const [files, setFiles] = useState([{ title: "File1" }, { title: "File2" }, { title: "File2" }, { title: "File3" }, { title: "File3" }, { title: "File2" }, { title: "File2" }, { title: "File2" }, { title: "File2" }, { title: "File2" }]);
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      {/* Header */}
      <h1 style={{
        backgroundColor: props.mode === 'dark' ? 'black' : 'white',
        color: props.mode === 'light' ? '#262525' : 'white'
      }}>Developer</h1>

      {/* Upload File */}
      <div style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white',color: props.mode === 'light' ? '#262525' : 'white'}}>
        <UploadFile mode={props.mode} />
      </div>
      
      <div className="accordion my-4" style={{ width: "160vh" }} id="accordionExample">
      {/* Accordions for Files to be reviewed by the reviewer */}
        <div className="accordion-item " >
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Files to be Reviewed
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse in show" style={{
            backgroundColor: props.mode === 'dark' ? '#262525' : 'white',
            color: props.mode === 'light' ? '#262525' : 'white'
          }}>
            <div className="accordion-body">
              <div className="row">
                {files.map((element) => {
                  return <div className="col-md-1" style={{ width: "12.499999995%" }}>
                    <File title={element.title} mode={props.mode} />
                  </div>
                })}
              </div>

            </div>
          </div>
        </div>

        {/* Accordions for Reviewed Files */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Reviewed Files
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" style={{
            backgroundColor: props.mode === 'dark' ? '#262525' : 'white',
            color: props.mode === 'light' ? '#262525' : 'white'
          }}>
            <div className="accordion-body">
              <div className="row">
                {files.map((element) => {
                  return <div className="col-md-1" style={{ width: "12.499999995%" }}>
                    <File title={element.title} mode={props.mode} />
                  </div>
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Accordion for Approved Files */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Approved Files
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" style={{
            backgroundColor: props.mode === 'dark' ? '#262525' : 'white',
            color: props.mode === 'light' ? '#262525' : 'white'
          }}>
            <div className="accordion-body" >
              <div className="row">
                {files.map((element) => {
                  return <div className="col-md-1" style={{ width: "12.499999995%" }}>
                    <File title={element.title} mode={props.mode} />
                  </div>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Developer