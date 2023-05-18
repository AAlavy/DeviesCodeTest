import { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import blogPost from './model/blogPost';
import StartPage from './components/startPage/startPage';
import BlogPostPage from './components/blogPostPage/blogPostPage';
import AboutPage from './components/aboutPage/aboutPage';
import NavBar from './components/navBar/navBar';

function App() {

  const [blogPosts, setBlogPosts] = useState<blogPost[]>([]);

  //Gets all blog posts from API
  function fetchPosts() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        setBlogPosts(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }

  useEffect(() => {
    fetchPosts();
  })

  return (
    <div className="App">
      <div id='app-nav-bar'>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<StartPage blogPosts={blogPosts} />} />
        <Route path="/post/:postId" element={<BlogPostPage blogPosts={blogPosts} />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
