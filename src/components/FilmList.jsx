import React from 'react'

const FilmList = ({ film }) => {

    return (
        <div>
            {film == undefined ? <p>loading</p>

                : <ul>
                    {film.map((f) => (
                        <li key={f.id}>
                            {f.title}
                        </li>
                    ))}
                </ul>}
        </div>
    )
}

export default FilmList
