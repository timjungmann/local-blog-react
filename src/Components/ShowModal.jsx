import React, {useContext, useEffect, useState} from 'react';
import ShowModalContext from '../Context/ShowModalContext';
import PostContext from '../Context/PostContext';

export default function ShowModal({entry}) {
  const {posts, setPosts} = useContext(PostContext);
  const {show, setShow, setEdit} = useContext(ShowModalContext);

  const [remove, setRemove] = useState("");

  function wannaRemove(id){
    remove == id ? setRemove("") : setRemove(id);
  }

  function removePost(id){
    const newPosts = posts.filter((post)=>{
      return post.id != id;
    });
    setShow("");
    setPosts(newPosts);
  }

  function editHandler(){
    setEdit(show);
    setShow("");
  }

  useEffect(() => {
    const close = (e) => e.key === 'Escape' ? setShow("") : null;
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  },[])

  return (
    <div className="modal">
      <div className="modal-inner-container">
        <div onClick={()=>setShow("")} className="close">×</div>
        <div className="modal-inner" style={{backgroundColor: `${entry.color}`}}>
          <div className="modal-header">
          <small>{entry.updated != "" ? <>last: {entry.updated}</> : <>{entry.time}</>}</small>
            <h4>{entry.title}</h4>
          </div>
          <div className="modal-body">
            <p>{entry.content}</p>
          </div>
          <div className="modal-footer">
            <div className="modal-icons">
              <div onClick={editHandler}>✏️</div>
              <div onClick={()=>wannaRemove(entry.id)}>❌</div>
              {remove == entry.id ? <p className="sure">delete? <span onClick={()=>removePost(entry.id)} className="yes">y</span> / <span onClick={()=>setRemove("")} className="no">n</span></p> : null}
            </div>
            {/* {entry.updated != "" ? <p><small>updated {entry.updated}</small></p> : null} */}
            <div className="modal-download">
              <div>📥</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
