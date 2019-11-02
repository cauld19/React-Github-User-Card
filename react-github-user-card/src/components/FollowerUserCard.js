import React from "react";

const FollowerUserCard = props => {

    

    return (
        <div>
            <div>
                <h1>{props.login}</h1>
                <img src={props.image} key={props.image} alt={props.image}/>
            </div>
        </div>
        
    )
}

export default FollowerUserCard;