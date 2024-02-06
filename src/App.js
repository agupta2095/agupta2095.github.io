import './App.css';
import Education from './components/Education';
import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import React from 'react';


function App() {
  return (
    <div className="App">
     <Header />
     <WorkExperience />
     <Education />
    </div>
  );
}

export default App;
