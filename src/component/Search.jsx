import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";
import "../css/search.css"
export const Search = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
       
        console.log('Search triggered with query:', query);
        const apiKey = '1a4ccc89abfa206e97d2fc3f73b1e3e2';
        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}`;
    
        setLoading(true);
        try{
            const response = await  axios.get(apiUrl)
            const result = response.data.results.slice(0,10)
            setSearchResults(result)
            console.log('Search results:', response.data.results);
        }catch(error) {
            console.error('Error fetching search results:', error);
            setLoading(false);
          };
    };
  

    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                <div class="list border-bottom fixed-top p-3 bg-light">
        <i class="fas fa-clipboard-list"></i> Your List
    </div>
    
    <div class="container mt-3">
        <div class="content">
            <p>Your content goes here.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
        </div>
    </div>
    
    <div class="fixed-bottom p-3 bg-light border-top">
        <p class="text-center mb-0">Footer content</p>
    </div>
                </div>

                <div className="col-md-9 border">
                      
            <div className="search-results">
                {searchResults.map((movie) => (
                    <div key={movie.id} className="">
                           <Link to={`/movies/${movie.id}`}>
                           
                           <img
                            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                            alt={movie.title}
                            className=""
                            width={"100px"}
                            height={"100px"}
                        />
                           </Link>
                    
                        <p>{movie.title}</p>
                    </div>
                ))}
            </div>
                <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">

                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  handleSearch(e);
                                }
                              }}
                        />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                   
                </div>
            </nav>
                </div>
            </div>
          
        </div>
    );
}
