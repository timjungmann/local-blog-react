import React, {useState, useContext} from 'react';

import PostContext from '../Context/PostContext';
import ColorContext from '../Context/ColorContext';

import Post from './Post';
import Home from './Home';
import Time from './Time';
import RandomId from './RandomId';

export default function Create({setAll}) {
  const {posts, setPosts} = useContext(PostContext);
  const {color, setColor} = useContext(ColorContext);

  const [title,setTitle] = useState("");
  const [content, setContent] = useState("");

  function submitHandler(e){
    e.preventDefault();
    setPosts([{id: RandomId(), title: title, content: content, time: ""+Time(), updated:"", color: `rgba(${color.r}, ${color.g}, ${color.b}, .8)`}, ...posts])
    setColor({"r": 255, "g":255, "b":255});
    setAll(true);
    setTitle("");
    setContent("");
  }

  return (
    <div className="Create">
      <div className="color">
          <input type="range" min="100" max="255" value={color.r} className="slider" id="red" onChange={(e)=>setColor({...color, "r":e.target.value})}/>
          <input type="range" min="100" max="255" value={color.g} className="slider" id="green" onChange={(e)=>setColor({...color, "g":e.target.value})}/>
          <input type="range" min="100" max="255" value={color.b} className="slider" id="blue" onChange={(e)=>setColor({...color, "b":e.target.value})}/>
        </div>

      <form onSubmit={submitHandler} autoComplete="off">
        <div className="title">Title</div>
        <input type="text" name="title" onChange={(e)=>setTitle(e.target.value)} value={title} placeholder="title..." maxLength="35"/>

        <div className="title">Content</div>
        <textarea name="content" onChange={(e)=>setContent(e.target.value)} value={content} placeholder="content..."/>
        <div></div>
        {/* {title != "" && username != "" && content != "" ? <button type="submit">Create a post</button>: null} */}
        <button type="submit" disabled={title.length >= 1 && content.length >= 1 ? false : true}>Create a post</button>
      </form>
    </div>
  )
}
