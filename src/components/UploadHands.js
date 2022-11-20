import React, { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios'; 

export default function UploadHands() {
    console.log('heeeeeeeeere!')
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };
    const handleSubmission = () => {
        // 
        const formData = new FormData();

        formData.append('File', selectedFile);

        console.log(selectedFile);
        axios.post(
            '0.0.0.0:80/upload/hands/',
            formData,
        )        
    };
    const uploadRequest = () => {
        axios.post(
            '0.0.0.0:80/upload/hands/',
            selectedFile,
        )
    }
    return (
        <>
            <Button variant="contained" component="label">
                Upload
                <input hidden type="file" name="file" onChange={changeHandler} />
            </Button>
            {
                isFilePicked ? (
                    // Post the file to python API 
                    <div>
                        <p>Filename: {selectedFile.name}</p>
                        <p>Filetype: {selectedFile.type}</p>
                        <p>Size in bytes: {selectedFile.size}</p>
                        <p>
                            lastModifiedDate:{' '}
                            {selectedFile.lastModifiedDate.toLocaleDateString()}
                        </p>            <div>
                        </div>
                    </div>
                ) : (
                    <p>Select a file to show details</p>
                )
                
            }
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>            
        </>
    )
}