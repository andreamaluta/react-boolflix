import { FilmProvider } from './context/FilmContext';
import FilterForm from './components/FilterForm';
import FilmList from './components/FilmList';


function App() {

  return (
    <>
      <FilmProvider>
        <FilterForm />
        <FilmList />
      </FilmProvider>

    </>
  )
}

export default App
