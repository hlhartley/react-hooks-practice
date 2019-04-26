import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [picOfTheDay, setPic] = useState([]);
  var imageStyle = {
    height: "100vh",
    backgroundImage: "url(" + ` ${picOfTheDay.hdurl}` + ")",
    backgroundSize: "100% 100%",
    color: "white"
  };
  
  useEffect(() => {
    async function fetchPic() {
      try {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`;
        const response = await fetch(url)
        const result = await response.json()
        setPic(result)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPic()
  }, []);

  return (
    <div className="App">
      <div style={imageStyle}>
        <h1>{`${picOfTheDay.title}`}</h1>
        <p>{`${picOfTheDay.explanation}`}</p>
      </div>
    </div>
  );
}

export default App;
