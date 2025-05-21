import React from 'react'

import languageToFlag from '../function/FlagFunction';

import { useFilm } from '../context/FilmContext'


const SerieList = () => {

    const { serie } = useFilm();

    const createLink = (posterLink) => {
        return "https://image.tmdb.org/t/p/w185" + posterLink;
    }

    const createList = () => {
        return <ul>
            {serie.map((item) => (
                <li key={item.id}>
                    <img src={createLink(item.poster_path)} alt="" />
                    <br />
                    {item.name}
                    <br />
                    {item.original_name}
                    <br />
                    {languageToFlag(item.original_language)}
                    < br />
                    {item.vote_average}
                </li>
            ))}
        </ul>
    }

    return (
        <>
            <h2>Serie</h2>
            <div>
                {serie == undefined ? <p>Cerca le serie</p> : createList()}
            </div>
        </>
    )
}

export default SerieList
