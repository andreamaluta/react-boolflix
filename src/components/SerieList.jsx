import React from 'react'

import languageToFlag from '../function/FlagFunction';
import createLink from '../function/PosterFunction';
import Stars from './Stars';

import { useFilm } from '../context/FilmContext'


const SerieList = () => {

    const { serie } = useFilm();

    const createList = () => {
        return <ul className='list-unstyled'>
            <div className="container">
                <div className="row">
                    {serie.map((item) => (
                        <div className="col-2 mb-3">
                            <div className="card">
                                <li key={item.id}>
                                    <img src={createLink(item.poster_path)} alt="" className='card-img-top' />
                                    <div className="card-body">
                                        <div>
                                            <h5>Titolo:</h5> {item.name}
                                        </div>
                                        <div>
                                            <h5>Titolo originale:</h5>{item.original_name}
                                        </div>
                                        <div>
                                            Lingua: {languageToFlag(item.original_language)}
                                        </div>
                                        <div>
                                            Valutazione: <Stars vote={item.vote_average} />
                                        </div>
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

                <h2>Serie TV</h2>
            </div>
            <div>
                {serie == undefined ? <p>Cerca le serie</p> : createList()}
            </div>
        </>
    )
}

export default SerieList
