import { FilmProvider } from './context/FilmContext';
import FilterForm from './components/FilterForm';
import FilmList from './components/FilmList';
import SerieList from './components/SerieList';


function App() {

  return (
    <>
      <FilmProvider>
        <FilterForm />
        <main>
          <FilmList />
          <SerieList />
        </main>
      </FilmProvider>

    </>
  )
}

export default App
