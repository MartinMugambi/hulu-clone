import React, { forwardRef } from "react";
import './movie.css';
import TextTruncate from 'react-text-truncate';
import { ThumbUpIcon } from "@heroicons/react/solid";

const Movie = forwardRef(({name, name2,name3,name4, overview, image, image2,vote,air, release}, ref) =>{
const fullImage = `https://image.tmdb.org/t/p/original${image}`
const fullImage2= `https://image.tmdb.org/t/p/original${image2}`
    return(
        <div className = "movie" ref= {ref}>
            <img src ={fullImage || fullImage2} alt ='psoter_image'/>
           <TextTruncate className= "movie_overview"
          line={2}
        element="span"
          truncateText="…"
         text = {overview}
/>
            <h3 className= "Movie-title">{name2 || name || name3 ||name4}</h3>
           
            <p className= "movie_stats">
             {air || release}
             <ThumbUpIcon className="icon" />
             <span>{vote}</span>
            </p>
        </div>
    );
});

export default Movie;