import React from 'react'

import languageToFlag from '../function/FlagFunction';

import { useFilm } from '../context/FilmContext'


const SerieList = () => {

    const { serie } = useFilm();

    const createList = () => {
        return <ul>
            {serie.map((item) => (
                <li key={item.id}>
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
