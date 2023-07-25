import React, {ChangeEvent, Dispatch, MouseEventHandler, useState} from "react";
import Post from "./Post";

export default function BlogInput() {
  const [post, updatePost] = useState(new Post('asfa'));

    function handleClick() {
        const components = post.getComponents();
    }

  function handleTextareaChange(event: ChangeEvent<HTMLTextAreaElement>) {
      updatePost(new Post(event.target.value));
  }

  return (
    <div>
      <textarea
        value={post.getOriginalPostContent()}
        onChange={handleTextareaChange}
        placeholder="Type something..."
        rows={20}
        cols={100}
      />
      <button onClick={handleClick}>Split</button>

    </div>
  )
}