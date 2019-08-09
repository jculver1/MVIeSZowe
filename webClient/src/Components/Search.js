import React from 'react'

const Search = (props) => {

    return (
        <div className="form-group has-search search input_container">
            <input key={movie.id}  onChange={(e) => props.getFilteredInfo('search', e)} type="text" className="form-control input" placeholder="&#xF002; Search"
            />
        </div >
    )
}

export default Search