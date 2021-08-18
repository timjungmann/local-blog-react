import React, {useContext, useEffect, useState} from 'react';
import PostContext from '../Context/PostContext';
import ShowModalContext from '../Context/ShowModalContext';

export default function Post() {
  const {posts, setPosts} = useContext(PostContext);

  // const {edit, setEdit} = useContext(ShowModalContext);
  const {show, setShow, setEdit} = useContext(ShowModalContext);

  const [remove, setRemove] = useState("");

  function wannaRemove(id){
    if(remove == id){
      setRemove("");
    } else {
      setRemove(id);
    }
  }

  function removePost(id){
    const newPosts = posts.filter((post)=>{
      return post.id != id;
    });
    console.log(newPosts.length);
    if(newPosts.length == 0){
      setPosts([]);
      localStorage.clear();
    } else{
      setPosts(newPosts);
    }
  }

  useEffect(()=>{
    localStorage.setItem("data", JSON.stringify(posts));
  })
  
  return(
    posts.map((entry)=>{
      return(
        <div key={entry.id} className="Post-container">
          <div className="Post" style={{backgroundColor: entry.color}}>
            <div onClick={()=>setShow(entry)} className="post-header">
              <small>{entry.updated != "" ? <>last: {entry.updated}</> : <>{entry.time}</>}</small>
              <h4>{entry.title}</h4>
            </div>
            <div className="post-body">
              <p>{entry.content}</p>
            </div>
            <div className="post-footer">
              <div className="icons">
                <div onClick={()=>setEdit(entry)}>✏️</div>
                <div onClick={()=>wannaRemove(entry.id)}>❌</div>
                {remove == entry.id ? <p className="sure">delete? <span onClick={()=>removePost(entry.id)}  className="yes">y</span> / <span onClick={()=>setRemove("")}  className="no">n</span></p> : null}
              </div>
              {/* {entry.updated != "" ? <p><small>updated {entry.updated}</small></p> : null} */}
              <div className="download">
              <div>📥</div>
            </div>
            </div>
          </div>
        </div>
      )
  })
  )
}
