import React from 'react'
import data from '../data'
import MovieInfo from './MovieInfo';

const Favorites = (props) => {

    return (
        <div className="favoriteList">
            <h5 className="py-2 favoritesDropdown titleStyles">Favorite List</h5>
            <div className="favoriteBox">
                {
                    props.favoriteList.map(movie => {
                        return (
                            <div className="">
                                <div className="favoriteItem bg-white">
                                    <div className="pb-1">
                                        {movie.title}
                                    </div>
                                    <div className="pb-2">
                                        <button className="orangeBtn text-white" onClick={() => props.deleteFromFavorites(movie.id)}>Delete</button>
                                        <button className="orangeBtn text-white">Watch Now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Favorites 