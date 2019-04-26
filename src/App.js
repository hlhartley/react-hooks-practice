import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [picOfTheDay, setPic] = useState([]);
  console.log('pic', picOfTheDay)
  
  useEffect(() => {
    async function fetchPic() {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`;
      const response = await fetch(url)
      const result = await response.json()
      setPic(result)
      console.log(result)
    }
    fetchPic()
  }, []);

  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
