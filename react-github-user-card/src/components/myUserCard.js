import React from 'react';

const MyUserCard = props => {

    return (
        <div>
            <div className="user-card-container"> 
                <img src={props.data.avatar_url} key={props.data.avatar_url} alt={props.data.avatar_url}/>
                <img className="github-image-graph" src={`http://ghchart.rshah.org/${props.data.login}`} alt={`${props.data.login}'s Github chart`} />
                <h2>Name: {props.data.name}</h2>
                <h3>UserName: {props.data.login}</h3>
                <h4>Location: {props.data.location}</h4>
                <h4>Repo count: {props.data.public_repos}</h4>
            </div>
        </div>
        
    )

}

export default MyUserCard;