import React from 'react';

const FileUpload = ({ onNotesReceived }) => {
    const handleChange = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:5000/upload', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) throw new Error('Upload Failed');

            const data = await response.json();
            onNotesReceived(data.notes);
        }   catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <input type="file" accept=".pdf, .musicxml" onChange={handleChange} />
        </div>
    );
};

export default FileUpload;