import './App.css';
import Header from './components/header';
import NavBar from './components/navbar';
import MovieList from './components/movielist';
import { useEffect, useState } from 'react';
import movies from './components/request';
import axios from 'axios';

function App() {

  const [movie, setMovie] = useState([]);

  const [selectOption, setSelectOption] = useState(movies.fetchTrending);

  useEffect(()=>{
   axios.get(selectOption).then(response =>{
     setMovie(response.data.results.slice(0, 18));
   }).catch(error =>{
    console.log(error);
   })
  },[selectOption])

  console.log("mivies", movie);
  return (
    <div className="App">
      <Header />
      <NavBar setSelectOption = {setSelectOption}/>
      <MovieList movie = {movie} />
    </div>
  );
}
 

export default App;
