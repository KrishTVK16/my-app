import React from 'react';
import './App.css';

function App() {
  // Function to create an array of stars (1 to 5)
  const renderStars = () => {
    let starsList = [];
    for (let i = 1; i <= 5; i++) {
      // For each iteration, we add i number of stars
      starsList.push(<p key={i}>{'*'.repeat(i)}</p>);
    }
    return starsList;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stars Pattern</h1>
        {/* Render the stars */}
        {renderStars()}
      </header>
    </div>
  );
}

export default App;
