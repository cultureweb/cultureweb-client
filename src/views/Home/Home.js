import React from "react";

export const Home = ({ datas }) => {
   
    return(
    <>
       <h1>Welcome Home</h1> 
            {datas.map(post => 
                <p key={post.title}> {post.title} </p> 
            )
        }
    </>
    )
}
export default Home;