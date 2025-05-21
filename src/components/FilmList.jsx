import React from 'react'
import { useFilm } from '../context/FilmContext'

import languageToFlag from '../function/FlagFunction';
import createLink from '../function/PosterFunction';
import Stars from './Stars';

const FilmList = () => {

    const { film } = useFilm();

    const createList = () => {
        return <ul>
            {film.map((f) => (
                <li key={f.id}>
                    <img src={createLink(f.poster_path)} alt="" />
                    <br />
                    {f.title}
                    <br />
                    {f.original_title}
                    <br />
                    {languageToFlag(f.original_language)}
                    <br />
                    <Stars vote={f.vote_average} />
                </li>
            ))}
        </ul>
    }

    return (
        <>
            <h2>Film</h2>
            <div>
                {film == undefined ? <p>Cerca i film</p> : createList()}
            </div>
        </>
    )
}

export default FilmList
