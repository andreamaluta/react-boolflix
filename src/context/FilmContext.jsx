import { useContext } from "react";
import { createContext, useState } from "react";

const FilmContext = createContext();

function FilmProvider({ children }) {
    const [film, setFilm] = useState();

    return (
        <FilmContext.Provider value={{ film, setFilm }}>
            {children}
        </FilmContext.Provider>
    )

}

function useFilm() {
    const context = useContext(FilmContext);
    return context;
}

export { FilmProvider, useFilm }