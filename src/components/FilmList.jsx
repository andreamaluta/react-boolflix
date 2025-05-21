import React from 'react'
import { useFilm } from '../context/FilmContext'

import languageToFlag from '../function/FlagFunction';
import createLink from '../function/PosterFunction';
import Stars from './Stars';

const FilmList = () => {

    const { film } = useFilm();

    const createList = () => {
        return <ul className='list-unstyled'>
            <div className="container">
                <div className="row">
                    {film.map((f) => (
                        <div className="col-2 mb-3">
                            <div className="card">
                                <li key={f.id}>
                                    <img src={createLink(f.poster_path)} alt="" className='card-img-top' />
                                    <div className="card-body">
                                        <div>
                                            <span>Titolo:</span> {f.title}
                                        </div>
                                        <div>
                                            <span>Titolo Originale</span>{f.original_title}
                                        </div>
                                        <div>
                                            <span>Lingua:</span> {languageToFlag(f.original_language)}
                                        </div>
                                        <div>
                                            <span>Valutazione:</span> <Stars vote={f.vote_average} />
                                        </div>
                                        <span>Descrizione</span><p>{f.overview}</p>
                                    </div>
                                </li>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ul>
    }

    return (
        <>
            <div className="container category">
                <h2>Film</h2>
            </div>
            <div>
                {film == undefined ? <p className='notList'>Nessun Film Cercato...</p> : createList()}
            </div>
        </>
    )
}

export default FilmList
