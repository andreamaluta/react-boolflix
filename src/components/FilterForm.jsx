import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import FilmList from './FilmList';

const FilterForm = () => {

    const [film, setFilm] = useState();
    const [search, setSearch] = useState('');

    const submit = (e) => {
        e.preventDefault();
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ede7653811e5ebe2dc037015dffde9ba&query=${search}`).then((res) => setFilm(res.data.results));
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

            <FilmList film={film} />

        </div>
    )
}

export default FilterForm
