// App.js
import React, { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import MovieList from './MovieList';
import Trailer from './Trailer';

function App() {
    const [list, setList] = useState([{
        title: "dark",
        img: "https://fr.web.img2.acsta.net/pictures/19/06/11/09/59/0923348.jpg",
        genre: "horreur",
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain",
        rate: "8/10",
        video: "https://www.dailymotion.com/embed/video/x45jlpm?autoplay=1"
    },
    {
        title: "Barbie",
        img: "https://fr.shopping.rakuten.com/photo/2625701665.jpg",
        genre: "comedie",
         description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain",
        rate: "5/10",
        video: "https://www.dailymotion.com/embed/video/x45jlpm?autoplay=1"
    }
    ])

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MovieList list={list} />}></Route>
                <Route path="/:id" element={<Trailer list={list}  />}></Route>
            </Routes>
        </div>
    );
}

export default App;
