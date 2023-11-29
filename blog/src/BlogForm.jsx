// BlogForm.js
import React, { useState } from 'react';
import './BlogForm.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import axios from 'axios'

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleContentChange = (e) => {
//     setContent(e.target.value);
//   };

//   const handleAuthorChange = (e) => {
//     setAuthor(e.target.value);
//   };

//   const handleDateChange = (e) => {
//     setDate(e.target.value);
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/blog', {title, content, author, date})
    .then(result => console.log(result))
    .catch(err => console.log(err))


      console.log({ title, content, author, date });
    // Reset the form fields
    setTitle('');
    setContent('');
    setAuthor('');
    setDate('');
  };

  return (
    <div className="blog-form-container">
      <form className="blog-form" onSubmit={handleSubmit}>
        <label>
          Enter Your Blog Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <br />
        <label>
          Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </label>
        <br />
        <label>
          Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </label>
        <br />
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <br />
         <div className="mb-3">
            <button type="submit" className="btn btn-primary">Add</button>
          </div>
        <Link to="/home"  type="submit">Go To Home</Link>
      </form>
    </div>
  );
};

export default BlogForm;
