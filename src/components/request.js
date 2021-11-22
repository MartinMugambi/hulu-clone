const API_KEY =  '5d657d365f93f31013f78d331be5420e';
const baseURL= 'https://api.themoviedb.org/3/'

 const movies =  
{
fetchTrending: `${baseURL}trending/all/day?api_key=${API_KEY}`,
fetchTopRated: `${baseURL}movie/top_rated?api_key=${API_KEY}`,
fecthAction: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedy:  `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=35`,
fecthHoror: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRomance: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchMystery: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=9648`,
fetchScifi: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=878`,
fetchWestern: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=37`,
fetchAnimation: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=16`,
fetchTvMovie: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=10770`,
}

export default movies;