import React from 'react';
import './download.css'; 

const DownloadResume = () => {
  const handleDownload = () => {
    
    const resumeUrl = 'resume.pdf';

    
    const tempAnchor = document.createElement('a');
    tempAnchor.href = resumeUrl;
    tempAnchor.setAttribute('download', 'resume.pdf');

    document.body.appendChild(tempAnchor);

   
    tempAnchor.click();

    
    document.body.removeChild(tempAnchor);
  };

  return (
    <div className="download-resume" id="download">
      <button onClick={handleDownload}>DOWNLOAD RESUME</button>
    </div>
  );
};

export default DownloadResume;
