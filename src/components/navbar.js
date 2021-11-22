import React from 'react';
import './navbar.css';
import movies from './request';
const NavBar = ({setSelectOption}) =>{
    return(
        <div className = "navbar">
        <span onClick= {()=> setSelectOption(movies.fetchTrending)}>Trending</span>
        <span onClick= {()=> setSelectOption(movies.fetchTopRated)}>Top Rated</span>
        <span onClick= {()=>setSelectOption(movies.fecthAction)}>Action</span>
        <span onClick= {()=>setSelectOption(movies.fetchComedy)}>Comedy</span>
        <span onClick= {()=>setSelectOption(movies.fecthHoror)}>Horror</span>
        <span onClick ={()=>setSelectOption(movies.fetchRomance)}>Romance</span>
        <span onClick={()=>setSelectOption(movies.fetchMystery)}>Mystery</span>
        <span onClick= {()=>setSelectOption(movies.fetchScifi)}>Sci-Fi</span>
        <span onClick= {()=>setSelectOption(movies.fetchWestern)}>Western</span>
        <span onClick= {()=>setSelectOption(movies.fetchAnimation)}>Animation</span>
        <span onClick ={()=>setSelectOption(movies.fetchTvMovie)}>Tv Movie</span>          
        </div>
    );
}

export default NavBar;