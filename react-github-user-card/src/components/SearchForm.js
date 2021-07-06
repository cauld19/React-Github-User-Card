import React from 'react';

const SearchForm = props => {
    return (
        <div className="search-form-container">
            <form className="search-form" onSubmit={props.handleSubmit}>
                <input 
                    onChange={props.handleChange}
                    type="text"
                    name="search"
                    value={props.searchName}
                    placeholder="...Search for a follower!"
                    className="input-form"
                />
                <button className="search-button">Submit</button> 
            </form>
            <form className="search-form" onSubmit={props.handleFetchUser}>
                <input 
                    onChange={props.handlUserChange}
                    type="text"
                    name="userSearch"
                    value={props.usersearchName}
                    placeholder="...Search for any github user!"
                    className="input-form"
                />
                <button className="search-button">Submit</button> 
            </form>

            <div>
                <button className="reset-button"onClick={() => props.resetFollowers()}>Reset</button>
            </div>
            
        </div>
    )
}

export default SearchForm;