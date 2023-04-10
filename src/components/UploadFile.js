import React from 'react'
import File from './File'
import UploadModal from './UploadModal';
const UploadFile = (props) => {
  const myStyle={border: "none", backgroundColor: props.mode === 'dark' ? 'black' : 'white',color: props.mode === 'light' ? 'black' : 'white'}

  return (
    <>
      {/* Button to upload file */}
      <button  className="btn" style={myStyle} data-bs-toggle="modal" data-bs-target="#exampleModal">
        <File title="Upload File" mode={props.mode} />
        <UploadModal mode={props.mode}/>
      </button>
      {/* Modal */}
    </>
  )
}

export default UploadFile