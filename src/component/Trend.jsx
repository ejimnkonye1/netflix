import React,{useState,useEffect} from "react";
import axios from "axios";
export const Trend = () => {
    const [trend, setTrend] = useState(null)
    const apiKey = '1a4ccc89abfa206e97d2fc3f73b1e3e2';
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

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

        <div className="">
        {trend && trend.map((movie, index) => (
            <div className="row p-2">
                <div key={index} className="col-2">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={"100px"} alt={movie.title} />         
                </div>

            </div>
        ))}
        </div>
    )
}