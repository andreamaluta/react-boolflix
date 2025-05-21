import React from 'react'

import languageToFlag from '../function/FlagFunction';
import createLink from '../function/PosterFunction';
import Stars from './Stars';

import { useFilm } from '../context/FilmContext'


const SerieList = () => {

    const { serie } = useFilm();

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
                    <Stars vote={item.vote_average} />
                </li>
            ))}
        </ul>
    }

    return (
        <>
            <div className="container category">

                <h2>Serie</h2>
            </div>
            <div>
                {serie == undefined ? <p>Cerca le serie</p> : createList()}
            </div>
        </>
    )
}

export default SerieList
