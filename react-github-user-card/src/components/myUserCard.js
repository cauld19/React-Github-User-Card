import React from 'react';

const MyUserCard = props => {

    return (
        <div>
            <div>
                <img src={`http://ghchart.rshah.org/${props.data.login}`} alt={`${props.data.login}'s Github chart`} /> 
                <img src={props.data.avatar_url} key={props.data.avatar_url} alt={props.data.avatar_url}/>
                <h2>{props.data.name}</h2>
                <h3>{props.data.login}</h3>
                <h4>{props.data.location}</h4>
                <h4>Repo count: {props.data.public_repos}</h4>
            </div>
        </div>
        
    )

}

export default MyUserCard;