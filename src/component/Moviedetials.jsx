
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/details.css'
export const Moviedetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading , setLoading] = useState(true)
    const [trailerKey, setTrailerKey] = useState(null);
    const [relatedMovies, setRelatedMovies] = useState([]);
    useEffect(() => {
        const apiKey = '1a4ccc89abfa206e97d2fc3f73b1e3e2';
        const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
        const videosUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`;
        const relatedMoviesUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US`;

        // Fetch movie details
        axios
          .get(movieUrl)
          .then((response) => {
            setMovie(response.data);
            setLoading(false);

            axios.get(relatedMoviesUrl)
          .then((relatedResponse) => {
            setRelatedMovies(relatedResponse.data.results.slice(0,3));
          })
          .catch((relatedError) => {
            console.error('Error fetching related movies:', relatedError);
          });
    
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
    
     
     <div class="container">
        <div class="row">
          
            <div class="col-6">
                <h6>Thriller</h6>
                <div className="movie-image-container details mt-3 card rounded m-2"

style={{
  position: 'relative',
  width: '100%',
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
      style={{ borderRadius: '10px' }} // Add border radius or other styles as needed
    />
  </div>
)}


</div>
            </div>
        
            <div class="col-6">
                <h6>Images</h6>
                <div className="movie-image-container details mt-3 card rounded m-2"

style={{
  position: 'relative',
  width: '100%',
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
      style={{ borderRadius: '10px' }} // Add border radius or other styles as needed
    />
  </div>
)}


</div>
            </div>
        </div>
    </div>

    {/* more container */}

    <div class="container">
        <div class="row">

            <div class="col-6">
                <h6>More</h6>
              <div className='big button'>
                <button  style={{
                  width : "100%",
                    borderRadius: "10px"
                }} className='btn btn-primary'>More Information About This Movie</button>
              </div>
              <div className='d-flex justify-content-between mt-2'>
                <button
                style={{
                  width: "50%",
                  borderRadius: "10px"
                }}>Add to favourite</button>
                <button
                 style={{
                  width: "50%",
                      borderRadius: "10px",
                      backgroundColor: "white"
                 }}>Watch now</button>
              </div>
            </div>
           
            <div class="col-6 mb-4">
            <div className='related-movies-container ' style={{ overflowX: 'auto', width: "%" }}>
        <h6>Related Movies</h6>
        <div className='d-flex flex-row'>
          {relatedMovies.map((relatedMovie) => (
            <div key={relatedMovie.id} className='mb-4 m-2'>
              <div className='' style={{width:"100%"}}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${relatedMovie.poster_path}`}
                  className='img-fluid img-det'
                  alt={relatedMovie.title}
                  style={{
                    width: "150px",
                    height: "225px",
                    
                    // objectFit: "cover"
                  }}
                />
                <div className='card-body p-0'>
                  <h6 className='card-title text-center mt-2'>{relatedMovie.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

            </div>
        </div>
    </div>
        </div>
    )

}