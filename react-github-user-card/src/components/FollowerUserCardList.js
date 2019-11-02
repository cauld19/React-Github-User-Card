import React from "react";

import FollowerUserCard from "./FollowerUserCard"

const FollowerUserCardList = props => {
    return (
        <div>
          <div>
            {props.followerData.map(user =>(
                <FollowerUserCard 
                    key={user.id}
                    login={user.login}
                    image={user.avatar_url}
                />
              ))}
          </div>
        </div>
    )
}
  
export default FollowerUserCardList;