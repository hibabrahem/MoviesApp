import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
function Trailer({ list }) {

    const { id } = useParams()

    return (
        <div>

            <div>
                <NavLink to="/"> <button style={{ position: 'absolute', left: '10px' }}>⏪</button></NavLink>
                <iframe
                    width="560"
                    height="315"
                    src={list[id].video}
                    frameborder="0"
                    allowfullscreen
                ></iframe>

                <h1> genre :<span style={{ color: 'red' }}> {list[id].genre}</span> </h1>
                <center> <p style={{ width: '500px' }}>  <span style={{textDecoration:'underline' }}>{list[id].title} </span> : {list[id].description} </p></center>

            </div>
        </div>
    );
}

export default Trailer;
