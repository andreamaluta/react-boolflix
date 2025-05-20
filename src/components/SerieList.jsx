import React from 'react'

import { useFilm } from '../context/FilmContext'
import emojiFlags from 'emoji-flags';

const SerieList = () => {

    const langToCountry = {
        en: 'US',
        it: 'IT',
        fr: 'FR',
        de: 'DE',
        es: 'ES',
        pt: 'BR',
        zh: 'CN',
        ja: 'JP',
        ru: 'RU',
        ko: 'KR',
        nl: 'NL',
        sv: 'SE',
        pl: 'PL',
        ar: 'SA',
        tr: 'TR',
        hi: 'IN',
    };

    const languageToFlag = (language) => {
        if (Object.hasOwn(langToCountry, language)) {
            return emojiFlags.countryCode(langToCountry[language]).emoji
        } else {
            return '🌐'
        }
    }

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
