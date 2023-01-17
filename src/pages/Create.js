import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Url from '../config/url'



export default function Create() {
    const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");




  const createBookmark = () => {
    fetch(`${Url}/bookmark/create-bookmark`, {
        method: "Post",
        headers: {
            'Content-Type': "application/json"
        },
        body:JSON.stringify({
            title,
            url
        })
    }).then(res => res.json()).then(data => {
        console.log(data)
        if(data.error)
            alert(data.error)
        navigate('/')
    })}

  return (
    <div>
      <h1>Create Book mark</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          createBookmark()
          
        }}
      >
        title
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        url
        <input
          type="url"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
        <button type="submit">Create Book Mark</button>
      </form>
    </div>
  );
}
