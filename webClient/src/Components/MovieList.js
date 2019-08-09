import React from 'react';
import data from '../data'

const MovieList = (props) => {

    const autoShowMovies =
        data.slice(0, (props.numDisplay)).map(movie => {
            return (
                <div key= {movie.id} className="px-8 py-2">
                    <div key={movie} className="card shadow rounded mb-1 mx-4">
                        <div className="card-body d-flex justify-content-between row">
                            <h5 className="card-title col-6">{movie.title}</h5>
                            {/* <div className='d-flex justify-content-between mb-1'>
                                <div>{movie.genre} </div>
                                <div>{movie.rating}</div>
                            </div> */}
                            <div className='col-5 d-flex align-self-center'>
                                
                                <button onClick={() => props.getMovieInfo(movie.id)} href="#" className="button btn-dark mr-1">Learn More</button>
                                <button onClick={() => props.addToFavorites(movie.id)} href="#" className="button orangeBtn text-white">Add to Favorites</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    
    const filteredMovies = 
        props.currentMovieList.slice(0, (props.numDisplay)).map(movie => {
            return (
                <div key= {movie.id} className="px-5 py-2 ">
                    <div className="card shadow rounded mb-1">
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <div className='d-flex justify-content-between mb-1'>
                                <div>{movie.genre} </div>
                                <div>{movie.rating}</div>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <button onClick={() => props.getMovieInfo(movie.id)} href="#" className="button btn-dark">Learn More</button>
                                <button onClick={() => props.addToFavorites(movie.id)} href="#" className="button orangeBtn text-white">Add to Favorites</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    
    
    const searchMovies = 
        props.currentMovieList.map(movie => {
            return (
                <div key={movie.id} className="px-5 py-2 ">
                    <div className="card shadow rounded mb-1">
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <div className='d-flex justify-content-between mb-1'>
                                <div>{movie.genre} </div>
                                <div>{movie.rating}</div>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <button onClick={() => props.getMovieInfo(movie.id)} href="#" className="button btn-dark">Learn More</button>
                                <button onClick={() => props.addToFavorites(movie.id)} href="#" className="button orangeBtn text-white">Add to Favorites</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    


    return (
        <div className='movie-list'>
            <div className="movieListHeader">Available Movies</div>
            {
                !props.autoDisplay && props.filterChosen 
                ?
                filteredMovies 
                :
                !props.autoDisplay && props.searchChosen 
                ?
                searchMovies
                : 
                autoShowMovies
            }

        </div >
    )
}

export default MovieList 