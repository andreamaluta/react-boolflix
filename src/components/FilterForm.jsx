import React from 'react'
import { useState } from 'react';
import axios from 'axios';

import { useFilm } from '../context/FilmContext';

const FilterForm = () => {

    const [search, setSearch] = useState('');
    const { setFilm } = useFilm();

    const submit = (e) => {
        e.preventDefault();
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ede7653811e5ebe2dc037015dffde9ba&query=${search}`).then((res) => setFilm(res.data.results));
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=ede7653811e5ebe2dc037015dffde9ba&query=${search}`).then((res) => console.log(res.data.results));
        setSearch('');
    }

    return (
        <div>
            <header>
                <form onSubmit={submit}>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button>Invia</button>
                </form>
            </header>

        </div>
    )
}

export default FilterForm
