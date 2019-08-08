import React from 'react'
import data from '../data'

const Tools = (props) => {

    return (
        <div className='mt-5 pl-4'>
            <div className='row'>
                <div className='Logo d-flex justify-content-between'>
                    <h1 className='pr-1'>MVIeS</h1>
                    <i class="fas fa-film"></i>
                </div>
            </div>
            <div className='h-100'>
                <div className="dropdown mb-3">
                    <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Display
                   </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {
                            props.displayList.map(item => {
                                return (
                                    <a onClick={() => props.setDisplayNumber(item)} class='dropdown-item'>{item}</a>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="dropdown mb-3 mt-3">
                    <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Rating
                </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton center">
                        {
                            props.ratingsArr.sort().map(item =>
                                <div onClick={() => props.getFilteredInfo('rating', item)} className="pl-3 dropdown-item" key={item}>{`${item}`}</div>
                            )
                        }
                    </div>
                </div>

                <div className="dropdown mb-3">
                    <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Genre
                </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {
                            props.genreArr.sort().map(item =>
                                <div onClick={() => props.getFilteredInfo('genre', item)} className="pl-3 dropdown-item" key={item}>{`${item}`}</div>
                            )
                        }
                    </div>
                </div>
                <div className="dropdown mb-3">
                    <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Year
                </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {
                            props.yearArr.sort((a, b) => b - a).map(item =>
                                <div onClick={() => props.getFilteredInfo('theaterdate', item)} className="pl-3 dropdown-item" key={item}> {`${item}`}</div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Tools 