import React from 'react'


const Tools = (props) => {

    return (
        <div className='mt-5 pl-4'>
            <div className='row'>
                <div className='Logo d-flex justify-content-between'>
                    <h1 className='pr-1'>MVIeS</h1>
                    <i className="fas fa-film"></i>
                </div>
            </div>
            <div className='h-100'>
                <div className="dropdown mb-3">
                    <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Display
                   </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {
                            props.displayList.map(item => {
                                return (
                                    <a key={item.id} onClick={() => props.setDisplayNumber(item)} className='dropdown-item'>{item}</a>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="dropdown mb-3 mt-3">
                    <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Rating
                </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton center">
                        {
                            props.ratingsArr.sort().map(item =>
                                <div key={item.id} onClick={() => props.getFilteredInfo('rating', item)} className="pl-3 dropdown-item" key={item}>{`${item}`}</div>
                            )
                        }
                    </div>
                </div>

                <div className="dropdown mb-3">
                    <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Genre
                </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {
                            props.genreArr.sort().map(item =>
                                <div key={item.id} onClick={() => props.getFilteredInfo('genre', item)} className="pl-3 dropdown-item" key={item}>{`${item}`}</div>
                            )
                        }
                    </div>
                </div>
                <div className="dropdown mb-3">
                    <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Year
                </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {
                            props.yearArr.sort((a, b) => b - a).map(item =>
                                <div key={item.id} onClick={() => props.getFilteredInfo('theaterdate', item)} className="pl-3 dropdown-item" key={item}> {`${item}`}</div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Tools 