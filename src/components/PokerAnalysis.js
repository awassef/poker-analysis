import React, { useState } from 'react';
import Navbar from "./Navbar";
import Button from '@mui/material/Button';

function PokerAnalysis() {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    // const handleSubmission = () => {
    //     // 
    //     const formData = new FormData();

    //     formData.append('File', selectedFile);

    //     console.log(selectedFile);
    // };

    return (
        <div>
            <Navbar />
            <Button variant="contained" component="label">
                Upload
                <input hidden type="file" name="file" onChange={changeHandler} />
            </Button>
            {isFilePicked ? (
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
            )}
        </div>
    )
}

export default PokerAnalysis;