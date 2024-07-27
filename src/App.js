import React, { useState, useEffect } from 'react';
import TravelForm from './TravelForm';
import TravelEntries from './TravelEntries';
import './App.css'; 

const App = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem('travelEntries')) || [];
    setEntries(storedEntries);
  }, []);

  const addEntry = (entry) => {
    const newEntries = [entry, ...entries];
    setEntries(newEntries);
    localStorage.setItem('travelEntries', JSON.stringify(newEntries));
  };

  return (
    <div className="App">
      <h1>Travel Log</h1>
      <TravelForm addEntry={addEntry} />
      <TravelEntries entries={entries} />
    </div>
  );
};

export default App;
