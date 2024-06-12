import React,{useState,useEffect} from "react";
import axios from "axios";
import "../css/sci.css"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Sci_fi = () => {
    const [Scimovie, setSciMovie] = useState(null)
    const apiKey = '1a4ccc89abfa206e97d2fc3f73b1e3e2';
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=878&sort_by=popularity.desc&page`;



    const FetchSci = async () => {
        try{
            const response = await axios.get(apiUrl)
            const TrendMovie = response.data.results.slice(0,5)
            setSciMovie(TrendMovie);
        }catch(error){
        console.error(error)
        }
    }
    useEffect(() => {
    FetchSci()
    },[])
    return(
<div >
<h5>Sci-fi  <FaAngleRight className="" /></h5>
<div className="Sci">
<div className="row p-2">
          {Scimovie && Scimovie.map((movie, index) => (
             
             <div key={index} className="col-6 col-sm-6 col-md-2 col-lg-2 mb-4 m-3">
                <Link to={`/movies/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={""} alt={movie.title} className="sci-img" />         
                </Link>

                  </div>
  
          ))}
          
          </div>
          </div>
</div>
       
    )
}