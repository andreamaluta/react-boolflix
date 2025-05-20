import React from 'react'
import { useFilm } from '../context/FilmContext'

const FilmList = () => {

    const { film } = useFilm();

    const createList = () => {
        return <ul>
            {film.map((f) => (
                <li key={f.id}>
                    {f.title}
                    <br />
                    {f.original_title}
                    <br />
                    {f.original_language}
                    <br />
                    {f.vote_average}
                </li>
            ))}
        </ul>
    }

    return (
        <div>
            {film == undefined ? <p>Cerca i film</p> : createList()}
        </div>
    )
}

export default FilmList
