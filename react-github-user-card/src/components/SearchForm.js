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
            <form className="search-form" onSubmit={props.handleFetchUser}>
                <input 
                    onChange={props.handlUserChange}
                    type="text"
                    name="userSearch"
                    value={props.usersearchName}
                />
                <button>Search for any github user!</button> 
            </form>

            <div>
                <button onClick={() => props.resetFollowers()}>Reset</button>
            </div>
            
        </div>
    )
}

export default SearchForm;