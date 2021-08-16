import React, {useState, useContext} from 'react';
import Post from './Post';
import PostContext from '../Context/PostContext';
import ShowModalContext from '../Context/ShowModalContext';
import ShowModal from './ShowModal';
import EditModal from "./EditModal";

export default function ShowAllPosts() {
  const {posts, setPosts} = useContext(PostContext);
  
  const {edit, setEdit} = useContext(ShowModalContext);
  const {show, setShow} = useContext(ShowModalContext);

  return (
    <>
      {show != "" ? <ShowModal entry={show}/> : null}
      {edit != "" ? <EditModal entry={edit}/> : null}
      <div className="show-posts">
        {posts.length > 0 ? <Post/> : <p>no entries yet...</p>}
      </div>
    </>
  )
}
