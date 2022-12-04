import React, { useState, useEffect } from 'react';
import { style } from '../tailwindStyle';
import axios from 'axios';

export const Home = () => {

  const [muscle, setMuscles] = useState([]);

  const renderMuscle = async () => {
    const response = await axios.get(
      "https://wger.de/api/v2/exercisecategory/"
    );
    setMuscles(response.data.results);
  };


  useEffect(() => {
    renderMuscle();
  }, []);


  return (
    <div className={style.backg}>
      <div className={style.container}>
        <h1 className={style.heading}>Exercise ++</h1>
        <p className={style.p}>The Website to help your Fitness Lifestyle</p>
      </div>
      {muscle.map(m => (
        <div className={style.container}>
          <button className={style.button} key={m.id}>{m.name}</button>
        </div>
      ))}
    </div>



  );
};

;
