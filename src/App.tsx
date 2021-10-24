import React, {useState} from 'react';
import './App.css';

import Navbar from './pages/Navbar';
import Input from './components/Input';
import { PostModel } from './models/PostModel';
import Post from "./components/Post";

let id = 1;

function App() {
  const [posts, setPosts] = useState<PostModel[]>([]);

  function addPost(newPost: string) {
    setPosts([{id, title: newPost}, ...posts]);
    id += 1;
  }

  function removePost(id: number) {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  }

  const removePostCallBack = (id: number) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <>
      <Navbar></Navbar>
      <Input addPost={addPost}></Input>
      {posts.map((post) => (
        <Post 
          key={post.id} 
          id={post.id} 
          title={post.title}
          callBack={removePostCallBack} 
        />
      ))}
    </>
  );
}

export default App;
