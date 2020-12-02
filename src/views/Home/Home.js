import React from "react";

export default function Home({ datas }) {
   
    return(
    <>
       <h1>Home</h1> 
            {datas.map(post => 
                <p key={post.title}> {post.title} </p> 
            )
        };
    </>
    )
}