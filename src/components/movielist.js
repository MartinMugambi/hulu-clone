import React from "react";
import Movie from "./movie";
import './movielist.css';
import FlipMove from  'react-flip-move'
const MovieList = ({movie}) =>{
   const movieList = movie.map(mov => <Movie  key ={mov.id}  name= {mov.name}  name2 = {mov.original_name} name3 = {mov.title} name4= {mov.original_title} overview= {mov.overview} image= {mov.backdrop_path}  image2= {mov.poster_path}vote ={mov.vote_count}  air ={mov.first_air_date} release = {mov.release_date}/>)
    return(
        <div className= "movie_list">
            <FlipMove>
         {movieList}
         </FlipMove>
        </div>
    );
}

export default MovieList;