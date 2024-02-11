import React, { useRef, useState } from 'react'
import MovieItem from './MovieItem'
import AddFilm from './AddFilm'
import { Link, NavLink } from 'react-router-dom';
function MovieList({list}) {

    
    const [filtredFilm, setFiltred] = useState(list)
    const R5 = useRef()

    const filterdFilm = () => {
        const filtredtitle = list.filter(e => e.title.toUpperCase().includes(R5.current.value.toUpperCase()) || e.genre.toUpperCase().includes(R5.current.value.toUpperCase()) || e.rate.toUpperCase().includes(R5.current.value.toUpperCase()))
        setFiltred(filtredtitle)
    }
    return (

        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", padding: "2vw", gap: "40px" }}>
            <h3>Movie Items</h3>
            <input ref={R5} type='text' placeholder='search for a product' onChange={filterdFilm}></input>
            <div style={{ display: "flex", gap: "20px" }}>

                {filtredFilm.map((e, index) => <NavLink to={"/" + index}>
                    <MovieItem list={e}></MovieItem>
                </NavLink>)}
                <AddFilm list={list} setList={setFiltred}></AddFilm>

            </div>

        </div>
    )
}

export default MovieList
