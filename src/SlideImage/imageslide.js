import React, { useState } from 'react';

export default function ImageSection() {
  const profileImages = [    'https://via.placeholder.com/400x400/ff0000/ffffff?text=Profile+1',    'https://via.placeholder.com/400x400/00ff00/ffffff?text=Profile+2',    'https://via.placeholder.com/400x400/0000ff/ffffff?text=Profile+3',  ];
  const [imageIndex, setImageIndex] = useState(0);

  const changeProfilePic = () => {
    setImageIndex((imageIndex + 1) % profileImages.length);
  };

  return (
    <div className="image-section" style={{ display: 'flex', width: '100%', height: '100%' }}>
      <div className="image-wrapper" style={{ flex: 1 }}>
        <img src={profileImages[imageIndex]} alt="Profile" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="button-wrapper" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button onClick={changeProfilePic}>Change Pic</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App" style={{ display: 'flex', width: '100%', height: '100%' }}>
      <div className="left-panel" style={{ flex: 1 }}>
        {/* Your content for the left panel goes here */}
      </div>
      <div className="right-panel" style={{ flex: 1 }}>
        <ImageSection />
      </div>
    </div>
  );
}
