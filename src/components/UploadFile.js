import React, {useRef} from 'react'
import File from './File'
const UploadFile = (props) => {
  const fileInputRef=useRef();
    const handleChange=(e)=>{
    console.log(e.target.files[0])
    }
  return(
    <>
      <button onClick={()=>fileInputRef.current.click()} style={{border:"none", backgroundColor: props.mode === 'dark' ? 'black' : 'white',
        color: props.mode === 'light' ? 'black' : 'white'}}>
        <File title="Upload File" mode={props.mode} />
      </button>
      <input onChange={handleChange} multiple={false} ref={fileInputRef} type='file' hidden/>
    </>
  )
}

export default UploadFile