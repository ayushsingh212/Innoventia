
import React from 'react';

const Note = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/sample.pdf'; 
    link.download = 'notes.pdf'; 
    link.click();
  };

  return <button onClick={handleDownload}>Download PDF</button>;
};

export default Note;