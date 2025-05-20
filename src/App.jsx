import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';


function App() {

  const [film, setFilm] = useState();
  const [filteredFilm, setFilteredFilm] = useState();
  const [search, setSearch] = useState('');

  const submit = (e) => {
    e.preventDefault();
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ede7653811e5ebe2dc037015dffde9ba&query=${search}`).then((res) => setFilm(res.data.results))
  }

  return (
    <>
      <header>
        <form onSubmit={submit}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button>Invia</button>
        </form>
      </header>


      {film == undefined ? <p>loading</p>

        : <ul>
          {film.map((f) => (
            <li key={f.id}>
              {f.title}
            </li>
          ))}
        </ul>}


    </>
  )
}

export default App
