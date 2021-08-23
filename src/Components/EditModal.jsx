import React, {useContext, useEffect, useState} from 'react';
import ShowModalContext from '../Context/ShowModalContext';
import PostContext from '../Context/PostContext';
import Time from './Time';

export default function EditModal({entry}) {
  const {posts, setPosts} = useContext(PostContext);
  const {show, setShow, edit, setEdit} = useContext(ShowModalContext);

  const [title,setTitle] = useState(entry.title);
  const [content, setContent] = useState(entry.content);

  const [remove, setRemove] = useState("");
  const [save, setSave] = useState("");
  const [change, setChange] = useState(false);

  function wannaRemove(id){
    remove == id ? setRemove("") : setRemove(id); setSave("");
  }

  function wannaSave(id){
    if(entry.title !== title || entry.content !== content){
      save == id ? setSave("") : setSave(id); setRemove("");
    } else {
      setShow(edit);
      setEdit("");
    }
  }

  function removePost(id){
    const newPosts = posts.filter((post)=>{
      return post.id != id;
    });
    setEdit("");
    setPosts(newPosts);
  }

  function saveChanges(){
    if(entry.title !== title || entry.content !== content){
      const newPosts = posts.filter((post)=>{
        return post.id != entry.id;
      });
      const newPost = {id: entry.id, title: title, content: content, time: entry.time, updated:""+Time(), color: entry.color};
      setPosts([newPost, ...newPosts]);
      if(change){
        setEdit("");
      } else {
        setShow(newPost);
        setEdit("");
      }
    } else {
      setShow(edit);
      setEdit("");
    }
  }

  function noChanges(){
    setTitle(entry.title);
    setContent(entry.content);
    setChange(false);
    if(save){
      setShow(edit);
      setEdit("");
    } else{
      setEdit("");
    }
  }

  function closeOrNot(){
    if(entry.title !== title || entry.content !== content){
      setChange(true);
    } else {
      setChange(false);
      setEdit("");
    }
  };

  return (
    <div className="modal">
      <div className="modal-inner-container">
        <div onClick={closeOrNot} className="close">×</div>
        {change ? <div className="change">save?<br/><span  className="yes" onClick={saveChanges}>y</span> / <span className="no" onClick={noChanges}>n</span></div> : null}
        <div className="modal-inner" style={{backgroundColor: `${entry.color}`}}>
          <div className="modal-header">
          <small>{entry.updated != "" ? <>last: {entry.updated}</> : <>{entry.time}</>}</small>
            <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" maxLength="35"/>
          </div>
          <div className="modal-body modal-edit-body">
            <textarea onChange={(e)=>setContent(e.target.value)} value={content} ></textarea>
          </div>
          <div className="modal-footer">
            <div className="modal-icons">
              <div onClick={()=>wannaSave(entry.id)}>✅</div>
              <div onClick={()=>wannaRemove(entry.id)}>❌</div>

              {remove == entry.id ? <p className="sure">delete? <span onClick={()=>removePost(entry.id)} className="yes">y</span> / <span onClick={()=>setRemove("")} className="no">n</span></p> : null}

              {save == entry.id ? <p className="sure">save? <span onClick={saveChanges} className="yes">y</span> / <span onClick={noChanges} className="no">n</span></p> : null}

            </div>
            {/* {entry.updated != "" ? <p><small>updated {entry.updated}</small></p> : null} */}
            <div className="modal-download">
              {/* <div>📥</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
