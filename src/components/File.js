import React from 'react'
import { FileIcon, defaultStyles } from 'react-file-icon';

const File = (props) => {
    return (
        <div className="card" style={{justifyContent: "center", alignItems: "center",width:"130px",border:"none",backgroundColor: props.mode === 'dark' ? '#262525' : 'white',color: props.mode === 'light' ? '#262525' : 'white',marginBottom:"10px",padding:"10px"}} >
            <div style={{   }}>
                <FileIcon extension="docx" {...defaultStyles.docx} />
            </div>
            <div className="mt-1" styles={{ }}>{props.title}</div>
        </div>
    )
}

export default File