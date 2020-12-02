import React from "react";
import Home from "./Home";
import Api from "./Api";
import useAsync from "react-use/lib/useAsync";



// function timeout(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

export default function HomeContainer(props) {
  const { value } = useAsync(async () => {

    const posts = await Api.getAllPosts();
    return {    
      posts
    };
  }, []);
  
  return (
    <Home
      datas={value && value.posts ? value.posts : []}
      {...props}
    />
  );
  }
 