import axios from 'axios'
import { useState } from 'react'


function App() {

  const [film, setFilm] = useState();

  const url = 'https://api.themoviedb.org/3/search/movie?api_key=ede7653811e5ebe2dc037015dffde9ba&query=ritorno+al+futuro'

  const filmCall = (url) => {
    axios.get(url).then((res) => console.log(res.data.results))

  }

  return (
    <>
      <header>
        <input type="text" />
        <button>Invia</button>
      </header>

      {filmCall(url)}

    </>
  )
}

export default App
