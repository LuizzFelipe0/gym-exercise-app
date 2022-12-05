import React, { useState, useEffect } from "react";
import { style } from "../tailwindStyle";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export const Muscle = () => {
  const [muscle, setMuscle] = useState([]);

 
  useEffect(() => {
    axios
      .get(`https://wger.de/api/v2/muscle/`)
      .then((response) => {
        setMuscle(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    <div className={style.backg}>
      {muscle.map((m) => (
        <div className={style.container}>
            <h1 className={style.heading} >
              {m.name}
            </h1>
        </div>
      ))}
    </div>
  );
};
