import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/Trend.css"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
export const Trend = () => {
    const [trend, setTrend] = useState(null)
    const apiKey = '1a4ccc89abfa206e97d2fc3f73b1e3e2';
    const apiUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&language=en-US&page`;


    const FetchTrend = async () => {
        try{
            const response = await axios.get(apiUrl)
            const TrendMovie = response.data.results.slice(0,5)
            setTrend(TrendMovie);
        }catch(error){
        console.error(error)
        }
    }
    useEffect(() => {
    FetchTrend()
    },[])
    return(
<div >
<h5>Trending now  <FaAngleRight className="" /></h5>
<div className="trend">
<div className="row p-2">
          {trend && trend.map((movie, index) => (
              
                 <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <Link to={`/movies/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={"100px"} alt={movie.title} className="trend-img" />         
                    </Link>
                 
                 
  
              </div>
          ))}
          </div>
          </div>
</div>
       
    )
}