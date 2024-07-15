// src/App.jsx
import React, { useState } from 'react';
import Posts from './Posts';
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState('posts');

  const renderTabContent = () => {
    switch (currentTab) {
      case 'posts':
        return <Posts />;
      // Add other tabs here if needed
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <button onClick={() => setCurrentTab('posts')}>Posts</button>
          {/* Add more buttons for other tabs here */}
        </nav>
        {renderTabContent()}
      </header>
    </div>
  );
}

export default App;
