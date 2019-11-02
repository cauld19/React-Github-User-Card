import React from "react";

const FollowerUserCard = props => {

    

    return (
        <div>
            <div>
                <img src={`http://ghchart.rshah.org/${props.login}`} alt={`${props.login}'s Github chart`} /> 
                <h1>{props.login}</h1>
                <img src={props.image} key={props.image} alt={props.image}/>
            </div>
            
        </div>
        
    )
}

export default FollowerUserCard;