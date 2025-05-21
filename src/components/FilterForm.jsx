import React from 'react'
import { useState } from 'react';
import axios from 'axios';

import { useFilm } from '../context/FilmContext';

const FilterForm = () => {

    const [search, setSearch] = useState('');
    const { setFilm, setSerie } = useFilm();

    const submit = (e) => {
        e.preventDefault();
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ede7653811e5ebe2dc037015dffde9ba&query=${search}`).then((res) => setFilm(res.data.results));
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=ede7653811e5ebe2dc037015dffde9ba&query=${search}`).then((res) => setSerie(res.data.results));
        setSearch('');
    }

    return (

        <header>
            <div className="container">
                <div className="row header-row">
                    <div className="col-4">
                        <div className="logo">
                            <img src="src\assets\img\Netflix_Logo_RGB.png" alt="" />
                        </div>
                    </div>
                    <div className="col-8">
                        <form onSubmit={submit}>
                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className='form-control' placeholder='Search' />
                            <button className='btn btn-outline-light ms-3 '>Invia</button>
                            <div className="account">

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </header>


    )
}

export default FilterForm
