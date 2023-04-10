import React from 'react'
import { ChangeEvent, useState, useRef } from 'react'
const UploadModal = (props) => {
    const myStyle={border: "none", backgroundColor: props.mode === 'dark' ? 'black' : 'white',color: props.mode === 'light' ? 'black' : 'white'}
    const fileInputRef = useRef();
    const handleChange = (e) => {
        console.log(e.target.files[0])
    }
    const [file, setFile] = useState();

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUploadClick = () => {
        if (!file) {
            return;
        }

        
        fetch('https://httpbin.org/post', {
            method: 'POST',
            body: file,
            
            headers: {
                'content-type': file.type,
                'content-length': `${file.size}`,
            },
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.error(err));
    };

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header" style={myStyle}>
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal asdf</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body" style={myStyle}>
                        <div style={{...myStyle}}>
                            <label htmlFor="files" className="button">Select Image</label>
                            <input id="files" style={{ visibility: "hidden" }} type="file" onChange={handleFileChange} />
                        </div>
                        <div>{file && `${file.name} - ${file.type}`}</div>

                        <button onClick={handleUploadClick}>Upload File</button>
                    </div>
                    <div className="modal-footer" style={myStyle}>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UploadModal