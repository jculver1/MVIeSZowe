import React from 'react'
import data from '../data'
import Favorites from './Favorites'

const MovieInfo = (props) => {

    let aboutMovie = data.filter(movie => movie.id === props.movieID)

    return (
        <div className="">
            <div className="movieInfo">
                <h5 className='py-2 favoritesDropdown titleStyles'>About the Movie</h5>
                {
                    aboutMovie.map(movie => {
                        return (
                            <div className="px-5 py-1 aboutMovie">
                                <div className='aboutMovie px-3 py-1 '>
                                    <div className='row'>
                                        <div className='col-5 titleStyles mt-1 d-flex align-items-center'>
                                            {movie.title}
                                        </div>
                                        <div className='col-7'>
                                            <p>
                                                Genre: {movie.genre}
                                            </p>
                                            <p>
                                                Rating: {movie.rating}
                                            </p>
                                            <p>
                                                Date: {movie.theaterdate}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='row mb-2'>
                                        {movie.desc}
                                    </div>
                                    <div className='row d-flex justify-content-center py-2'>
                                        <button onClick={() => props.addToFavorites(movie.id)} href="#" class="button orangeBtn text-white">Add to Favorites</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <Favorites
                    favoriteList={props.favoriteList}
                    deleteFromFavorites={props.deleteFromFavorites} />
            </div>
        </div>

    )
}

export default MovieInfo    
