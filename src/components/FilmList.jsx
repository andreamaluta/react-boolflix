import React from 'react'
import { useFilm } from '../context/FilmContext'
import emojiFlags from 'emoji-flags';

const FilmList = () => {

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
            return <span>
                {language}
            </span>
        }
    }

    const { film } = useFilm();

    const createList = () => {
        return <ul>
            {film.map((f) => (
                <li key={f.id}>
                    {f.title}
                    <br />
                    {f.original_title}
                    <br />
                    {languageToFlag(f.original_language)}
                    < br />
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
