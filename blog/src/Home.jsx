// Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from the server when the component mounts
    axios.get('http://localhost:3001/blog')
      .then(response => setBlogs(response.data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []); // The empty dependency array ensures this effect runs only once, similar to componentDidMount

  return (
    <div className="blog-list-container">
      <h2>All Blogs</h2>
      <ul className="blog-list">
        {blogs.map(blog => (
          <li key={blog._id} className="blog-item">
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <p>Author: {blog.author}</p>
            <p>Date: {blog.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
