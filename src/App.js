import React from 'react';
import "./App.css"
import VideoGrid from './components/VideoGrid';

const App = ({ videos }) => {

  return (
    <div className="App">
      <VideoGrid videos={videos} />
    </div>
  );
};

export default App;