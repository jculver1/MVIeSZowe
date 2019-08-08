import React from 'react'

const Search = (props) => {

    return (
        <div class="form-group has-search search input_container">
            <input onChange={(e) => props.getFilteredInfo('search', e)} type="text" class="form-control input" placeholder="&#xF002; Search"
            />
        </div >
    )
}

export default Search