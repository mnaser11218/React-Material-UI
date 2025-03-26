import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function PdfInput() {
    const [pdfName, setpdfName] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setpdfName(file.name);
        }
    };

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const projectData = {
            "pdfName":pdfName
        }
        try {
            const response = await fetch('http://localhost:8080/saveProjects', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(projectData), 
            });

            if (!response.ok) {
              throw new Error('Failed to create project');
            }

            const result = await response.json(); 
            setResponseMessage(`Project created successfully! ID: ${result.id}`);
          } catch (error) {
            setResponseMessage(`Error: ${error.message}`);
          }
         setProjectName("")
         setAnalysisName("")
         setAnalysisDescription("")
         setCustomerName("")
         setCustomerNumber("")
         setSolutionInfo("")
         setSystemId("")
         setJsonObject({ data: [] })
         setPdfName('')
         
}


    return (
        <div>
            <TextField
                label={pdfName ? pdfName : "WRICEF documentation"}
                value={pdfName}
                variant="standard"
                fullWidth
                InputProps={{
                    readOnly: true,
                    endAdornment: (
                        <Button component="label" variant="standard" color="secondary">
                            Browse
                            <input
                                accept=".pdf"
                                type="file"
                                multiple
                                onChange={handleFileChange}
                                style={{ display: 'none' }} // Hide the default input
                                id="pdf-upload"
                            />
                        </Button>
                    ),
                }}
            />
        </div>
    );
}

export default PdfInput;