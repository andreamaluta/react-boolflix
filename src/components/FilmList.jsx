import React from 'react'
import { useFilm } from '../context/FilmContext'

import languageToFlag from '../function/FlagFunction';
import createLink from '../function/PosterFunction';

const FilmList = () => {

    const { film } = useFilm();

    const stars = (vote) => {
        const finalVote = Math.round(vote / 2);
        const star = [];
        for (let i = 0; i < finalVote; i++) {
            star.push(<i key={`full-${i}`} className="fa-solid fa-star"></i>);
        }
        for (let i = 0; i < 5 - finalVote; i++) {
            star.push(<i key={`empty-${i}`} className="fa-regular fa-star" ></i >);
        }
        return star;
    }

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
                    < br />
                    {Math.round(f.vote_average / 2)}
                    {stars(f.vote_average)}
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
