import { createContext, useState, useContext } from "react";
import { addPost as addPostAction, getPosts as getPostsAction } from '../actions';


export const PostsContext = createContext({});

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);

  const addPost = async(data) => {
    if(await addPostAction(data)) getPosts();
  }

  const getPosts = async() => {
    console.log('oi');
    const response = await getPostsAction();
    if (response) setPosts(response.data);
  }

  const removeAllPosts = () => setPosts(null);

  return (
    <PostsContext.Provider
      value={{
        posts,
        addPost,
        getPosts,
        removeAllPosts
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);