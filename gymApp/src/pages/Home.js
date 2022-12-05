import React, { useState, useEffect } from 'react';
import { style } from '../tailwindStyle';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Muscle } from './Muscle';

export const Home = () => {

     const [category, setCategory] = useState([]);

    const renderCategory = async () => {
        const response = await axios.get(
            "https://wger.de/api/v2/exercisecategory/"
        );
        setCategory(response.data.results);
    };


    useEffect(() => {
        renderCategory();
    }, []);


    return (
        <div className={style.backg}>
            <div className={style.container}>
                <h1 className={style.heading}>Exercise ++</h1>
                <p className={style.subtitle}>The Website to help your Fitness Lifestyle</p>
            </div>
            
            {category.map(c => (
                <div className={style.container}>
                    <Link to={`/muscle/${c.id}`} key={c.id} element={<Muscle />}>
                        <button className={style.button} category={category}>{c.name}</button>
                    </Link>
                </div>
            ))}
        </div>



    );
};

;
