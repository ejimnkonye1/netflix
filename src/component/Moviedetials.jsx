
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/details.css'
export const Moviedetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading , setLoading] = useState(true)
    const [trailerKey, setTrailerKey] = useState(null);
    useEffect(() => {
        const apiKey = '1a4ccc89abfa206e97d2fc3f73b1e3e2';
        const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
        const videosUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`;
    
        // Fetch movie details
        axios
          .get(movieUrl)
          .then((response) => {
            setMovie(response.data);
            setLoading(false);
    
            // Fetch trailer key
            axios.get(videosUrl)
              .then((videosResponse) => {
                const trailer = videosResponse.data.results.find(video => video.type === 'Trailer');
                if (trailer) {
                  setTrailerKey(trailer.key);
                }
              })
              .catch((videosError) => {
                console.error('Error fetching movie videos:', videosError);
              });
          })
          .catch((error) => {
            console.error('Error fetching movie details:', error);
            setLoading(false);
          });
      }, [id]);
      if (!movie) {
        return <p>Movie not found.</p>;
      }
      const moviepic = {
        height : "100vh",
        width : "100%",
        backgroundSize: 'cover',
        backgroundImage: movie ? `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")` : 'none',
        }
    return(

        <div className="container-fluid movie-details-container " >
     <div className='' style={moviepic}
     >

     </div>
     
     
     
     
     
     <div className='image-thriler-container d-flex justify-content-between'>
        <div >
            
        </div>
     <div className="movie-image-container details mt-3 card rounded m-4"
  style={{
    position: 'relative',
    width: '50%',
    height: '310px',
    backgroundColor: 'rgb(0, 0, 0)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  {movie && (
    <div className="movie-trailer-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${trailerKey}`}
        title="Movie Trailer"
        frameBorder="0"
        allowFullScreen
        style={{ borderRadius: '8px' }} // Add border radius or other styles as needed
      />
    </div>
  )}


</div>

<div className="movie-image-container details mt-3 card rounded m-4"

  style={{
    position: 'relative',
    width: '50%',
    height: '310px',
    backgroundColor: 'rgb(0, 0, 0)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
    
  {movie && (
    <div className="movie-trailer-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <img
        width="100%"
        height="100%"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        title="Movie Trailer"
        frameBorder="0"
        allowFullScreen
        style={{ borderRadius: '8px' }} // Add border radius or other styles as needed
      />
    </div>
  )}


</div>
     </div>
     

        </div>
    )

}