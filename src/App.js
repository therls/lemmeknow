import React from 'react';
import './App.css';
import { NewsContextProvider } from './NewsContext';
import Search from './components/Search'
import Results from './components/Results'

function App() {
  return (
    <div className="App">
      <Search></Search>
      <NewsContextProvider>
        <Results />
      </NewsContextProvider>
    </div>
  );
}

export default App;
