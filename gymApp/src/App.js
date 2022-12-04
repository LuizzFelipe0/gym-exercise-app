import React, { useState, useEffect } from 'react';
import { style } from './tailwindStyle';
import axios from 'axios';

const App = (props) => {

  const [exercises, setExercises] = useState([]);

  const render = async () => {
    const response = await axios.get(
      "https://wger.de/api/v2/exercise"
    );
    setExercises(response.data.results);
  };
 
 
  useEffect(() => {
    render();
  }, []);
  
  
  return (
    <div className={style.backg}>
      <div className={style.container}>
        <h1 className={style.heading}>Exercise ++</h1>
      </div>
      {exercises.map(e => (
        <div className={style.container}>
        <li className={style.heading} key={e.id}>
          
            
            {e.name}
          
        </li>
        </div>
      ))}
    </div>



  );
};

export default App;
