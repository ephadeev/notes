import React, {useEffect} from 'react';
import './App.css';

const App = () => {
  useEffect(() => getNotes(), []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
      </header>
    </div>
  );
}

export default App;