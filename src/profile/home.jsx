import React, { useState, useEffect } from "react";
import "../css/home.css"
import { FaSearch } from "react-icons/fa";
import img1 from "../assets/images/ProfilePicture (1).png"
import { FaStar, FaStarHalfAlt, FaRegStar, FaPlay } from 'react-icons/fa'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import img from "../assets/images/Rectangle 7.png"
import img2 from "../assets/images/Rectangle 8.png"
import img3 from "../assets/images/Rectangle 9.png"
import img4 from "../assets/images/Rectangle 10.png"
import img5 from "../assets/images/Rectangle 11.png"
import img6 from "../assets/images/Rectangle 6.png"
import axios from "axios";
import { Trend } from "../component/Trend";
import { Sci_fi } from "../component/Sci-fi";
import { Top10 } from "../component/Top";
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";
export const HomePage = () => {
  const [topmovie, setTopMovie] = useState(null)
  const [popular, setPopular] = useState(null)
  const [year , setYear] = useState(null)
  const [dir , setdir] = useState(null)
  const [genres, setGenres] = useState({});

  const apiKey = '1a4ccc89abfa206e97d2fc3f73b1e3e2';
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
  const genresApiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
  
  const fecthMovie = async () => {
    try {
       
      
      
      
      const response = await axios.get(apiUrl)
      
      const movie =  response.data.results
      const popularmovie = response.data.results.slice(0,5)
      const randomIndex = Math.floor(Math.random() * movie.length);
      const randomMovie = movie[randomIndex]




        // Extract the release year from the release_date
     const releaseYear = new Date(randomMovie.release_date).getFullYear();

        console.log(`Random Movie: ${randomMovie.title}`);
        console.log(`Release Year: ${releaseYear}`);
  

      
   
      setTopMovie(randomMovie)
      setYear(releaseYear)
   
      setPopular(popularmovie)
    } catch(error) {
        console.error('Error fetching random background image:', error);
      }
  }
  useEffect (() => {
    
fecthMovie()
  },[])
  
  const style = {
  height : "100vh",
  width : "100%",
  backgroundSize: 'cover',
  backgroundImage: topmovie ? `url("https://image.tmdb.org/t/p/original${topmovie.backdrop_path}")` : 'none',
  }
  

  
    return(
 <div className="">
 <div className="home-pic" style={style}>
       {topmovie && (
        <div>
              <nav class="navbar navbar-expand-sm">
    <div class="container-fluid net-h">
    <a class="navbar-brand net-name" href="#">
  <span class="netflix-text">NETFLIX</span> |
  <span class="fir friday-text">Friday July 8th</span>
</a>
     
      <div class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        </ul>
        <div class="d-flex">
          <div class="search-icon m-2">
           <FaSearch  className="sear-color"/>
          </div>
        </div>
        <div className="circle-image m-2">
              <img src={img1} alt="profile" />
            </div>
      </div>
    </div>
  </nav>
  <div className="movie-des container-fluid">
  <p className="movie-genre">Action | Adventure | Sci-F </p>
      <h2 className="movie-title">{topmovie.title}</h2>
      <p className="movie-description"> {topmovie.overview}.</p>
      
      <p className="movie-details">{year} | Director : Shawn Levy | Season 1 {topmovie.year} </p>
      <div className="movie-rating mb-2">
        <FaStar className="m-1 rate" />
        <FaStar  className="m-1 rate"/>
        <FaStar  className="m-1 rate"/>
        <FaStar className="m-1 rate"/>
        <FaStarHalfAlt  className="m-1 rate"/>
      </div>
      <button className="btn btn-danger stream-button mb-0">
        Stream Now <FaPlay className="faplay" />
      </button>
    </div>
    <div className="popular-container container-fluid">
        <div className="pop">
        <h6 className="popular-title text-white">POPULAR THIS WEEK</h6>
      <div className="popular-icons">
        <FaAngleLeft  className="faleft"/>
        <FaAngleRight className="faleft" />
      </div>
        </div>
    <div className="popular-card">
 

    {popular && popular.map((movie,index) => (
      <div className="row p-2">
        <div key={index} className="col-2 ">
        <Link to={`/movies/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={"100px"} alt={movie.title} className="pop-ing" />
        </Link>
        </div>

      </div>
    ))}


    </div>
    </div>
        </div>
       )}
  <Top10  className="mt-2" /> 
<Trend />
<Sci_fi />
<Footer />
            </div>
 </div>
       
    )
  

}