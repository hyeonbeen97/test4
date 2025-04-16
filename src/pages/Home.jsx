import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Home.css";

const Home = () => {
    const images = [
        { src: 'image1.jpg', title: "hello1" },
        { src: 'image2.jpg', title: "hello2" },
        { src: 'image3.jpg', title: "hello3" }
    ];
    const [inx, setInx] = useState(0);
    const [weather, setWeather] = useState();

    useEffect(() => {
        const timer = setInterval(() => {
            setInx(prev => (prev === images.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const API_KEY = '8dfa8082ef269e03327e68fc5fec9303';
        const CITY = 'ansan';
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=kr`;

        const fetchWeather = async () => {
            try {
                const res = await axios.get(URL);
                setWeather({
                    temp: res.data.main.temp,
                    description: res.data.weather[0].description,
                    icon: res.data.weather[0].icon
                });
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };
        fetchWeather();
    }, []);

    return (
        <div className='homeOutBox'>
            {
                images.map((img, idx) => (
                    <div
                        key={idx}
                        className={`img ${inx === idx ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/${img.src})` }}
                    >
                        <h1 className={`title ${inx === idx ? 'on' : ''}`}>{img.title}</h1>
                    </div>
                ))
            }
            {
                weather && (
                    <div className='weather'>
                        {/* <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`}  */}
                        <img src={`http://openweathermap.org/img/wn/` + weather.icon + `@2x.png`} 
                        alt={weather.description} 
                        referrerPolicy='no-referrer'
                        />
                        <div>{weather.temp}°C </div>
                        <div>{weather.description}</div>
                    </div>
                )
            }
        </div>
    );
};

export default Home;
