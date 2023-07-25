// src/App.js
import React from 'react';
import BlogInput from "./BlogInput";




function App() {

  const content = `
  Once upon a time
  
  `;

  return (
    <div>
      <h1>Welcome to My One Page App!</h1>
      <p>This is a simple one-page React application.</p>
      <BlogInput />
    </div>
  );
}

export default App;

