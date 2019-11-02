import React from 'react';

const SearchForm = props => {
    return (
        <div>
            <form className="search-form" onSubmit={props.handleSubmit}>
                    <input 
                        onChange={props.handleChange}
                        type="text"
                        name="search"
                        value={props.searchName}
                    />
                    <button>Search for a follower!</button> 
                </form>
        </div>
    )
}

export default SearchForm;