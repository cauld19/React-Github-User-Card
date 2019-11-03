import React from "react";

const FollowerUserCard = props => {

    

    return (
        <div>
            <h1 className="follower-title">Followers:</h1>
            <div className="user-card-container">
                <img src={props.image} key={props.image} alt={props.image}/>
                <img src={`http://ghchart.rshah.org/${props.login}`} alt={`${props.login}'s Github chart`} /> 
                <h1>{props.login}</h1>
            </div>
            
        </div>
        
    )
}

export default FollowerUserCard;